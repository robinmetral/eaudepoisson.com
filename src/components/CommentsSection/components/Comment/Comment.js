import React from "react";
import { css } from "@emotion/core";
import { formatDate } from "../../../../helpers";

const Comment = ({ date, name, comment, handleReplyTo }) => (
  <div
    css={(theme) => css`
      margin: ${theme.space[3]} 0;
    `}
  >
    <div
      css={(theme) => css`
        display: flex;
        margin-bottom: ${theme.space[0]};
      `}
    >
      <strong>{name}</strong>, le {formatDate(date)}
      <button
        css={css`
          text-decoration: underline;
          margin-left: auto;
          /* button styles reset */
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          outline: inherit;
          cursor: pointer;
        `}
        onClick={handleReplyTo}
      >
        répondre
      </button>
    </div>
    <p
      css={css`
        /* p styles reset */
        margin: 0;
      `}
    >
      {comment}
    </p>
  </div>
);

export default Comment;
