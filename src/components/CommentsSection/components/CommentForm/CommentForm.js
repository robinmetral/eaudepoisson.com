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
          margin-left: ${comment.parentId ? theme.space[3] : 0};
        `
      }
    >
      <Input
        type="text"
        name="name"
        placeholder="Nom"
        value={comment.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Adresse email"
        value={comment.email}
        onChange={handleChange}
        required
      />
      <Textarea
        name="comment"
        placeholder="Commentaire"
        value={comment.comment}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        css={theme => css`
          flex: 1;
          margin-bottom: ${theme.space[0]};
        `}
      >
        {comment.parentId ? "Répondre" : "Commenter"}
      </Button>
      {comment.parentId && (
        <Button onClick={handleResetReplyTo}>Annuler la réponse</Button>
      )}
    </form>
  )
}

export default CommentForm
