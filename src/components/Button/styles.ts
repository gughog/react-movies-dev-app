import styled, { css } from 'styled-components';

export const ButtonBaseLayout = css<ButtonStyles>`
  margin-right: 1rem;
  border: none;
  padding: 0;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${({ bgColor, theme }) => bgColor || theme.light};
  color: ${({ fontColor, theme }) => fontColor || theme.darkDeepest};

  * { padding: 0.5rem; }

  &:hover { transform: scale(1.05); }
  &:active {
    transform: scale(1);
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: row;
    font-size: 1.2rem;
    text-align: center;
    margin-right: 0;
    margin-top: 1rem;

    margin: 1rem 0.5rem 0 0.5rem 
  }
`;

export const ButtonBody = styled.button<ButtonStyles>`
  ${ButtonBaseLayout}
`;
