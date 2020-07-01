import * as React from 'react';
import { handleFavoriteClick, handleWatchListClick } from 'helpers/click.handlers';
import { useHistory } from 'react-router-dom';
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

export const MainMovie: React.FC<MovieCardProps> = (props) => {
  const {
    id,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    poster_path,
    title,
    isFavorite = false,
    isOnWatchList = false,
  } = props;

  const history = useHistory();
  const [onFavorites, setOnFavorites] = React.useState(isFavorite);
  const [onWatchList, setOnWatchList] = React.useState(isOnWatchList);

  return (
    <MainMovieContainer
      key={id}
      data-testid="mainMovieBackdropImage"
      backgroundImage={`${process.env.REACT_APP_IMAGE_BASE_URL}original${backdrop_path}`}
    >
      <MainMoviePoster
        data-testid="mainMoviePoster"
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}w300${poster_path}`}
      />
      <MainMovieMeta>
        <MainMovieTopic> Popular </MainMovieTopic>
        <MainMovieTitle data-testid="mainMovieTitle">
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
            id="mainMovieGoToDetails"
            text="See Details"
            bgColor={theme.darkShallow}
            fontColor="white"
            icon="launch"
            responsive
            onClick={() => history.push(`/movie/${id}`)}
          />
          <Button
            id="mainMovieToggleWatchList"
            text={onWatchList ? 'Remove from Watch List' : 'Add to Watch List'}
            bgColor={theme.info}
            fontColor="white"
            icon={onWatchList ? 'playlist_add_check' : 'playlist_add'}
            responsive
            onClick={() => {
              handleWatchListClick(props);
              setOnWatchList(!onWatchList);
            }}
          />
          <Button
            id="mainMovieToggleFavorite"
            text={onFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
            icon={onFavorites ? 'star' : 'star_border'}
            bgColor={theme.emphasys}
            fontColor={theme.darkDeepest}
            responsive
            onClick={() => {
              handleFavoriteClick(props);
              setOnFavorites(!onFavorites);
            }}
          />
        </MainMovieActionsContainer>
      </MainMovieMeta>
    </MainMovieContainer>
  );
};
