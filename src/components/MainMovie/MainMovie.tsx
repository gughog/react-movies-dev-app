import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'components';
import { theme } from 'themes';
import { setFavorite, setToWatchList } from 'services/Storage.service';
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
  overview,
  poster_path,
  backdrop_path,
  release_date,
  vote_average,
  title,
}) => {
  const history = useHistory();

  return (
    <MainMovieContainer key={id} backgroundImage={`${process.env.REACT_APP_IMAGE_BASE_URL}original${backdrop_path}`}>
      <MainMoviePoster src={`${process.env.REACT_APP_IMAGE_BASE_URL}w300${poster_path}`} />
      <MainMovieMeta>
        <MainMovieTopic> Popular </MainMovieTopic>
        <MainMovieTitle>
          {title}
        </MainMovieTitle>
        <MainMovieVoteAverage>
          {vote_average}
          /10
        </MainMovieVoteAverage>
        <MainMovieReleaseDate>
          Release:
          {' '}
          {release_date.slice(0, 4)}
        </MainMovieReleaseDate>
        <MainMovieDescription>
          {overview}
        </MainMovieDescription>
        <MainMovieActionsContainer>
          <Button
            text="See Details"
            bgColor={theme.darkShallow}
            fontColor="white"
            icon="launch"
            responsive
            onClick={() => history.push(`/movie/${id}`)}
          />
          <Button
            text="Add to Watch List"
            bgColor={theme.info}
            fontColor="white"
            icon="playlist_add"
            responsive
            onClick={() => setToWatchList({
              id,
              poster_path,
              backdrop_path,
              title,
              release_date,
              overview,
            })}
          />
          <Button
            text="Add to Favorites"
            bgColor={theme.danger}
            fontColor="white"
            icon="favorite_border"
            responsive
            onClick={() => setFavorite({
              id,
              poster_path,
              backdrop_path,
              title,
              release_date,
              overview,
            })}
          />
        </MainMovieActionsContainer>
      </MainMovieMeta>
    </MainMovieContainer>
  );
};
