import * as React from 'react';
import { useHistory } from 'react-router-dom';
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

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  overview,
  backdrop_path,
  release_date,
  title,
}) => {
  const history = useHistory();
  return (
    <MovieCardContainer key={id}>
      <MovieCardImage src={backdrop_path ? `${process.env.REACT_APP_IMAGE_BASE_URL}original${backdrop_path}` : noPicture} />
      <MovieCardBody>
        <MovieCardTitle to={`/movie/${id}`}>
          {title}
        </MovieCardTitle>
        <MovieCardReleaseDate>{release_date.slice(0, 4)}</MovieCardReleaseDate>
        <MovieCardDescription>
          {overview}
        </MovieCardDescription>
        <MovieCardActions>
          <Button
            icon="launch"
            bgColor={theme.darkDeep}
            fontColor={theme.light}
            onClick={() => history.push(`/movie/${id}`)}
          />
          <Button
            icon="playlist_add"
            bgColor={theme.info}
            fontColor={theme.light}
          />
          <Button
            icon="favorite_border"
            bgColor={theme.danger}
            fontColor={theme.light}
          />
        </MovieCardActions>
      </MovieCardBody>
    </MovieCardContainer>
  );
};
