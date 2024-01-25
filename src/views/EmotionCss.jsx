import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const style = css`
  background-color: #fff;
`;

class EmotionCss extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div css={style}>
        <h2
          css={css`
            color: red;
          `}
        >
          This is EmotionCss page
        </h2>
        <h3>This is H3 fragment</h3>
      </div>
    );
  }
}

export default EmotionCss;
