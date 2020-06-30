import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SearchInputText = styled.input`
  display: block;
  height: 2.5rem;
  width: 50vw;
  font-size: 1.25rem;
  box-sizing: border-box;

  color: ${({ theme }) => theme.darkShallow};

  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-right: 0;
  }
`;
