import styled from 'styled-components';

export const ButtonBody = styled.button<ButtonStyles>`
  margin-right: 1rem;
  border: none;
  padding: 0;
  background-color: aquamarine;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: transform 0.3s;
  cursor: pointer;

  border-radius: 0.5rem;

  background-color: ${({ bgColor, theme }) => bgColor || theme.light};
  color: ${({ fontColor, theme }) => fontColor || theme.darkDeepest};

  * {
    padding: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
