import React from "react"
import { css } from "@emotion/core"
import { formatDate } from "../../../../helpers"

const Comment = ({ date, name, comment, handleReplyTo }) => (
  <div
    css={css`
      display: flex;
      margin: 2rem 0;
    `}
  >
    <div
      css={theme => css`
        display: flex;
        flex-direction: column;
        min-width: ${theme.sizes[0]};
      `}
    >
      <strong
        css={theme =>
          css`
            font-size: ${theme.fontSizes[1]};
          `
        }
      >
        {name}
      </strong>
      <span
        css={theme =>
          css`
            font-size: ${theme.fontSizes[0]};
          `
        }
      >
        {formatDate(date)}
      </span>
      <button
        css={theme =>
          css`
            /* button styles reset */
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            outline: inherit;
            cursor: pointer;
            /* end reset */
            font-size: ${theme.fontSizes[0]};
            text-align: left;
            text-decoration: underline;
          `
        }
        onClick={handleReplyTo}
      >
        répondre
      </button>
    </div>
    <p
      css={theme =>
        css`
          /* p styles reset */
          margin: 0;
          font-size: ${theme.fontSizes[1]};
        `
      }
    >
      {comment}
    </p>
  </div>
)

export default Comment
