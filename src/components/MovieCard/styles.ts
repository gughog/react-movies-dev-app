import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  width: 300px;
  transition: display 0.3s, transform 0.3s;

  &:hover {
    position: relative;
    transform: scale(1.05);
    div {
      display: block;
    }
  }
`;

export const MovieCardBody = styled.div`
  background-color: ${({ theme }) => theme.darkShallow};
  padding: 1rem;
  position: absolute;
  display: none;
  width: 300px;
`;

export const MovieCardImage = styled.img`
  width: 300px;
`;

export const MovieCardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const MovieCardReleaseDate = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const MovieCardDescription = styled.p`
  line-height: 1.4;
`;

export const MovieCardActions = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
