import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardContainer = styled.div`
  max-width: 300px;
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
  opacity: 0.90;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  display: none;
  max-width: 300px;
`;

export const MovieCardImage = styled.img`
  max-width: 300px;
`;

export const MovieCardTitle = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.light};
`;

export const MovieCardReleaseDate = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

export const MovieCardDescription = styled.p`
  line-height: 1.4;
  text-align: justify;
`;

export const MovieCardActions = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    margin: 0.5rem;
  }
`;
