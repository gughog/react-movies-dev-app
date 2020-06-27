import styled from 'styled-components';

export const MainMovieContainer = styled.section`
  display: flex;
  padding: 1rem;
  min-height: calc(100vh - 7.5rem);

  background-image: url(http://image.tmdb.org/t/p/original//zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg);
  background-color: ${({ theme }) => theme.darkShallow};
  background-size: cover;
  border-radius: 0.5rem;
  border: 0.25rem solid ${({ theme }) => theme.darkShallow};
`;

export const MainMoviePoster = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 0.5rem;
  margin: 0.5rem solid red;
  border: 0.25rem solid ${({ theme }) => theme.darkShallow};
`;

export const MainMovieMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  background-color: rgba(39, 46, 54, 0.9);
  border-radius: 0.5rem;
`;

export const MainMovieTopic = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const MainMovieTitle = styled.h1`
  font-size: 4.5vw;
  margin-bottom: 1rem;
`;

export const MainMovieVoteAverage = styled.span`
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  font-weight: bolder;
  color: lightgreen;
`;

export const MainMovieReleaseDate = styled.span`
  margin-bottom: 1rem;
  font-weight: bolder;
`;

export const MainMovieDescription = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
`;

export const MainMovieActionsContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
`;
