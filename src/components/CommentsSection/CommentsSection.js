import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Heading from "../Heading"
import Comment from "./components/Comment"
import CommentForm from "./components/CommentForm"

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: ${({ nested, theme }) => (nested ? theme.space[3] : 0)};
`

const CommentsSection = ({ articleId }) => {
  const initialCommentFormData = {
    domainId: 1, // this is eaudepoisson
    articleId,
    parentId: null,
    name: "",
    email: "",
    comment: "",
  }
  const [commentFormData, setCommentFormData] = useState(initialCommentFormData)

  const handleReplyTo = id => {
    setCommentFormData({ ...commentFormData, parentId: id })
  }

  const { loading: queryLoading, error: queryError, data } = useQuery(
    QUERY_COMMENTS,
    {
      variables: { articleId },
    }
  )

  const [
    createComment,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_COMMENT, {
    ignoreResults: true, // we don't care about the returned value because we refetch
    refetchQueries: [
      {
        query: QUERY_COMMENTS,
        variables: { articleId },
      },
    ],
    onCompleted: () => setCommentFormData(initialCommentFormData), // todo find a way to avoid the failing validation on reset
  })

  return (
    <section
      css={theme => css`
        margin: 4rem 0;
        font-size: ${theme.fontSizes[1]};
      `}
      className="comments"
    >
      <Heading h="2" center>
        Commentaires
      </Heading>
      {queryLoading && <p>Loading...</p>}
      {queryError && <p>Error loading comments: {queryError.message}</p>}
      {// todo abstract comments list into separate component
      data && (
        <List>
          {data.comments.map(({ children, id, ...comment }) => (
            <li key={id}>
              <Comment {...comment} handleReplyTo={() => handleReplyTo(id)} />
              {!!children.length && (
                <List nested>
                  {children.map(({ id: childCommentId, ...childComment }) => (
                    <li key={childCommentId}>
                      <Comment
                        {...childComment}
                        // always reply to parent
                        handleReplyTo={() => handleReplyTo(id)}
                      />
                    </li>
                  ))}
                </List>
              )}
              {commentFormData && commentFormData.parentId === id && (
                <CommentForm
                  comment={commentFormData}
                  setComment={setCommentFormData}
                  createComment={createComment}
                  disabled={mutationLoading}
                  handleResetReplyTo={() => handleReplyTo(null)}
                />
              )}
            </li>
          ))}
        </List>
      )}
      {commentFormData && commentFormData.parentId === null && (
        <CommentForm
          comment={commentFormData}
          setComment={setCommentFormData}
          createComment={createComment}
          disabled={mutationLoading}
        />
      )}
      {// todo harmonize error messages
      mutationError && <p>Error posting comment: {mutationError.message}</p>}
    </section>
  )
}

CommentsSection.fragments = {
  comment: gql`
    fragment CommentFragment on comments {
      id
      date
      name
      comment
    }
  `,
}

const QUERY_COMMENTS = gql`
  query commentsByArticleId($articleId: Int!) {
    comments(
      where: {
        domain: { name: { _eq: "eaudepoisson" } }
        article_id: { _eq: $articleId }
        parent_id: { _is_null: true }
      }
      order_by: { date: asc }
    ) {
      ...CommentFragment
      children(order_by: { date: asc }) {
        ...CommentFragment
      }
    }
  }
  ${CommentsSection.fragments.comment}
`

const CREATE_COMMENT = gql`
  mutation createComment(
    $domainId: Int!
    $articleId: Int!
    $email: String!
    $name: String!
    $comment: String!
    $parentId: Int
  ) {
    insert_comments(
      objects: {
        domain_id: $domainId
        article_id: $articleId
        email: $email
        name: $name
        comment: $comment
        parent_id: $parentId
      }
    ) {
      returning {
        ...CommentFragment
      }
    }
  }
  ${CommentsSection.fragments.comment}
`

export default CommentsSection
