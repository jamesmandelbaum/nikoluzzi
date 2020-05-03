import React from 'react';
import Card from './Card';
import { css } from '@emotion/core';

const Grid = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        & > * {
         
          margin: 0 0 rem;
          width: 100%;
          border-radius: 0.25rem;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Grid;
