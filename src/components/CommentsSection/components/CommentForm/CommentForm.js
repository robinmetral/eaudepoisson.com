import React, { useState } from "react"
import { css } from "@emotion/core"

import Input from "../../../Input"
import Textarea from "../../../Textarea"
import Button from "../../../Button"

const CommentForm = ({
  comment,
  setComment,
  handleResetReplyTo,
  createComment,
  disabled,
}) => {
  const [timestamp] = useState(Date.now())

  const handleChange = e => {
    setComment({ ...comment, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const secondsOnPage = (Date.now() - timestamp) / 1000
    if (secondsOnPage > 10) {
      createComment({
        variables: {
          ...comment,
        },
      })
    }
    // todo handle error from anti-spam validation
  }

  return (
    <form
      onSubmit={handleSubmit}
      disabled={disabled}
      css={theme =>
        css`
          margin-left: ${comment.parentId ? theme.space[4] : 0};
          display: flex;
          font-size: ${theme.fontSizes[1]};
        `
      }
    >
      <div
        css={theme => css`
          display: flex;
          flex-direction: column;
          min-width: ${theme.sizes[0]};
        `}
      >
        <Input
          type="text"
          name="name"
          placeholder="Nom"
          value={comment.name}
          onChange={handleChange}
          required
          css={css`
            flex: 1;
          `}
        />
        <Input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={comment.email}
          onChange={handleChange}
          required
          css={css`
            flex: 1;
          `}
        />
      </div>
      <Textarea
        name="comment"
        placeholder="Commentaire"
        value={comment.comment}
        onChange={handleChange}
        required
      />
      <div
        css={theme => css`
          display: flex;
          flex-direction: column;
          min-width: ${theme.sizes[0]};
        `}
      >
        <Button
          type="submit"
          value={comment.parentId ? "Répondre" : "Commenter"}
          css={css`
            flex: 1;
          `}
        />
        {comment.parentId && (
          <Button value="Annuler la réponse" onClick={handleResetReplyTo} />
        )}
      </div>
    </form>
  )
}

export default CommentForm
