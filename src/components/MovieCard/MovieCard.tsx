import * as React from 'react';
import { handleFavoriteClick, handleWatchListClick } from 'helpers/click.handlers';
import { Link, useHistory } from 'react-router-dom';
import noPicture from 'assets/no_picture.png';
import { theme } from 'themes';
import { Button } from 'components';
import {
  MovieCardContainer,
  MovieCardImage,
  MovieCardBody,
  MovieCardTitle,
  MovieCardReleaseDate,
  MovieCardDescription,
  MovieCardActions,
} from './styles';

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const {
    id,
    overview,
    poster_path,
    release_date,
    title,
    isFavorite = false,
    isOnWatchList = false,
  } = props;

  const history = useHistory();

  const [onFavorites, setOnFavorites] = React.useState(isFavorite);
  const [onWatchList, setOnWatchList] = React.useState(isOnWatchList);

  return (
    <MovieCardContainer key={id}>
      <Link to={`/movie/${id}`}>
        <MovieCardImage src={poster_path ? `${process.env.REACT_APP_IMAGE_BASE_URL}original${poster_path}` : noPicture} />
      </Link>
      <MovieCardBody>
        <MovieCardTitle to={`/movie/${id}`}>
          {title}
        </MovieCardTitle>
        <MovieCardReleaseDate>{release_date.slice(0, 4)}</MovieCardReleaseDate>
        <MovieCardDescription>
          {
            overview.replace(/^(.{121}).{2,}/, '$1...')
          }
        </MovieCardDescription>
        <MovieCardActions>
          <Button
            icon="launch"
            bgColor={theme.darkDeep}
            fontColor={theme.light}
            onClick={() => history.push(`/movie/${id}`)}
          />
          <Button
            icon={onWatchList ? 'playlist_add_check' : 'playlist_add'}
            bgColor={theme.info}
            fontColor={theme.light}
            onClick={() => {
              handleWatchListClick(props);
              setOnWatchList(!onWatchList);
            }}
          />
          <Button
            icon={onFavorites ? 'star' : 'star_border'}
            bgColor={theme.emphasys}
            fontColor={theme.darkDeepest}
            onClick={() => {
              handleFavoriteClick(props);
              setOnFavorites(!onFavorites);
            }}
          />
        </MovieCardActions>
      </MovieCardBody>
    </MovieCardContainer>
  );
};
