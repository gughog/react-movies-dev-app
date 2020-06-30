import styled from 'styled-components';

export const MainMovieContainer = styled.section<MainMovieContainerProps>`
  display: flex;
  padding: 1rem;
  min-height: calc(35rem - 7.5rem);
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.darkShallow};
  background-size: cover;
  border-radius: 0.5rem;
  border: 0.25rem solid ${({ theme }) => theme.darkShallow};

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const MainMoviePoster = styled.img`
  min-width: 300px;
  height: 450px;
  border-radius: 0.5rem;
  margin: 0.5rem solid red;
  border: 0.25rem solid ${({ theme }) => theme.darkShallow};

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    border-radius: 0;
    border: none;
  }
`;

export const MainMovieMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding: 1rem;
  background-color: rgba(39, 46, 54, 0.9);
  border-radius: 0.5rem;

  @media only screen and (max-width: 800px) {
    margin: 0;
    border-radius: 0;
  }
`;

export const MainMovieTopic = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const MainMovieTitle = styled.h1`
  font-size: 4.5vw;
  margin-bottom: 1rem;

  @media only screen and (max-width: 800px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const MainMovieVoteAverage = styled.span`
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  font-weight: bolder;
  color: lightgreen;

  @media only screen and (max-width: 800px) {
    text-align: center;
    margin-right: 0;
  }
`;

export const MainMovieReleaseDate = styled.span`
  margin-bottom: 1rem;
  font-weight: bolder;

  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const MainMovieDescription = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;

  @media only screen and (max-width: 800px) {
    text-align: justify;
  }
`;

export const MainMovieActionsContainer = styled.div`
  margin-top: auto;
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
