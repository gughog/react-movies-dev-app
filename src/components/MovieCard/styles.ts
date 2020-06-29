import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const MovieCardTitle = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.light};
`;

export const MovieCardReleaseDate = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem 0;
`;

export const MovieCardDescription = styled.p`
  line-height: 1.4;
`;

export const MovieCardActions = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
