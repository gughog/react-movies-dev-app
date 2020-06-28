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


export const MainMovie: React.FC = () => (
  <MainMovieContainer backgroundImage="http://image.tmdb.org/t/p/original//zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg">
    <MainMoviePoster src="http://image.tmdb.org/t/p/w300/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" />
    <MainMovieMeta>
      <MainMovieTopic> Trendings </MainMovieTopic>
      <MainMovieTitle> Star Wars </MainMovieTitle>
      <MainMovieVoteAverage> 8.2/10 </MainMovieVoteAverage>
      <MainMovieReleaseDate> Release: 25/05/1977 </MainMovieReleaseDate>
      <MainMovieDescription>
        Princess Leia is captured and held hostage by the evil Imperial forces in their effort
        to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han
        Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful
        princess and restore peace and justice in the Empire.
      </MainMovieDescription>
      <MainMovieActionsContainer>
        <Button
          text="Watch trailer"
          bgColor={theme.darkShallow}
          fontColor="white"
          icon="slideshow"
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
