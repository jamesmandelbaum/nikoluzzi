import React from 'react';
import Card from './Card';
import { css } from '@emotion/core';

const Grid = ({ children }) => {
  return (
    <div
      css={css`
        column-count: ${3};
        column-gap: 0.5rem;
        & > * {
          display: inline-block;
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
