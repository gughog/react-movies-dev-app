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

export const MovieCard = () => (
  <MovieCardContainer>
    <MovieCardImage src="http://image.tmdb.org/t/p/original//zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg" />
    <MovieCardBody>
      <MovieCardTitle>Star Wars</MovieCardTitle>
      <MovieCardReleaseDate> 1977 </MovieCardReleaseDate>
      <MovieCardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vero quidem provident beatae dolores? Amet libero sed accusamus
        saepe alias eos.
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
