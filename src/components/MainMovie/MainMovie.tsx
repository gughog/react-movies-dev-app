import * as React from 'react';
import { Button } from 'components';
import { theme } from 'themes';
import {
  MainMovieContainer,
  MainMoviePoster,
  MainMovieMeta,
  MainMovieTopic,
  MainMovieTitle,
  MainMovieVoteAverage,
  MainMovieReleaseDate,
  MainMovieDescription,
  MainMovieActionsContainer,
} from './styles';


export const MainMovie: React.FC<MovieCardProps> = ({
  id,
  description,
  image,
  backdropImage,
  releaseDate,
  votes,
  title,
}) => (
  <MainMovieContainer backgroundImage={`${process.env.REACT_APP_IMAGE_BASE_URL}original${backdropImage}`}>
    <MainMoviePoster src={`${process.env.REACT_APP_IMAGE_BASE_URL}w300${image}`} />
    <MainMovieMeta>
      <MainMovieTopic> Popular </MainMovieTopic>
      <MainMovieTitle>
        {title}
      </MainMovieTitle>
      <MainMovieVoteAverage>
        {votes}
        /10
      </MainMovieVoteAverage>
      <MainMovieReleaseDate>
        Release:
        {' '}
        {releaseDate.slice(0, 4)}
      </MainMovieReleaseDate>
      <MainMovieDescription>
        {description}
      </MainMovieDescription>
      <MainMovieActionsContainer>
        <Button
          text="See Details"
          bgColor={theme.darkShallow}
          fontColor="white"
          icon="launch"
          responsive
        />
        <Button
          text="Add to Watch List"
          bgColor={theme.info}
          fontColor="white"
          icon="playlist_add"
          responsive
        />
        <Button
          text="Add to Favorites"
          bgColor={theme.danger}
          fontColor="white"
          icon="favorite_border"
          responsive
        />
      </MainMovieActionsContainer>
    </MainMovieMeta>
  </MainMovieContainer>
);
