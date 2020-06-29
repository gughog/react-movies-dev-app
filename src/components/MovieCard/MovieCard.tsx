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
  description,
  image,
  releaseDate,
  title,
}) => {
  const history = useHistory();
  return (
    <MovieCardContainer key={id}>
      <MovieCardImage src={image ? `${process.env.REACT_APP_IMAGE_BASE_URL}original${image}` : noPicture} />
      <MovieCardBody>
        <MovieCardTitle to={`/movie/${id}`}>
          {title}
        </MovieCardTitle>
        <MovieCardReleaseDate>{releaseDate.slice(0, 4)}</MovieCardReleaseDate>
        <MovieCardDescription>
          {description}
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
