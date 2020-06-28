import * as React from 'react';
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
}) => (
  <MovieCardContainer key={id}>
    <MovieCardImage src={`${process.env.REACT_APP_IMAGE_BASE_URL}original${image}`} />
    <MovieCardBody>
      <MovieCardTitle>{title}</MovieCardTitle>
      <MovieCardReleaseDate>{releaseDate.slice(0, 4)}</MovieCardReleaseDate>
      <MovieCardDescription>
        {description}
      </MovieCardDescription>
      <MovieCardActions>
        <Button
          icon="launch"
          bgColor={theme.darkDeep}
          fontColor={theme.light}
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
