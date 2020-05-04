import React, { useState } from "react"
import { css } from "@emotion/core"

const Card = ({ cardNumber }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div
      css={css`
        /* background: white; */
        border-radius: 4px;
        height: ${open ? 18 : 10}rem;
        opacity: ${open ? 1 : 0.7};
        grid-row-end: span ${open ? 19 : 11};
        display: flex;
        place-content: center;
        cursor: pointer;
        /*Transition is still jumpy*/
        /*transition: height 200ms ease-out;*/
        transition: ${open ? `height 200ms ease-out` : ""};
        & > * {
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
      onClick={handleClick}
    >
      <p
        css={css`
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        `}
      >
        {cardNumber}
      </p>
    </div>
  )
}

export default Card
