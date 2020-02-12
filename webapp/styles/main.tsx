import { keyframes, jsx, css, Global } from "@emotion/react";
import styled from "@emotion/styled";
/** @jsx jsx */

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);

const row = css`
  display: flex;
  flex-flow: row;
`;
const column = css`
  display: flex;
  flex-direction: column;
`;

export const flex = {
  row,
  column
};

const wrapStyles = css`
  padding: 40px 80px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled("div")`
  ${wrapStyles}
`;

export const FlexForm = styled.form`
  /* ${(props: any) => props.column && flex.column}
  ${(props: any) => props.row && flex.row} */
  ${flex.column}
`;

const inputBox = css`
  outline: 0;
  margin: 10px 0;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  input {
    padding: 0px;
    border: 0;
    height: 100%;
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 2px rgba(20, 240, 160, 0.5);
    border: solid 1px rgba(20, 240, 160, 0.5);
  }
`;

export const Input = props => {
  return (
    <div css={[flex.row, inputBox]}>
      <input {...props} />
    </div>
  );
};
