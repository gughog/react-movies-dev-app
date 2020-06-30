import * as React from 'react';
import Api from 'services/Api.service';
import {
  handleFavoriteClick,
  handleWatchListClick,
  markFavoritesAndOnWatchListAndReturn,
} from 'helpers/click.handlers';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'components';
import { ErrorAlertAndRedirect } from 'components/SweetAlert';
import { GridWithTitleTitle } from 'components/GridWithTitle/styles';
import { GridFrame, LinkButton } from 'components/global-styles';
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
} from 'components/MainMovie/styles';
import { MovieVideo } from './styles';

export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails>({
    isFavorite: false,
    isOnWatchList: false,
    popularity: 0,
    vote_count: 0,
    video: false,
    poster_path: '',
    id: 0,
    adult: false,
    backdrop_path: '',
    original_language: '',
    original_title: '',
    genre_ids: [],
    title: '',
    vote_average: 0,
    overview: '',
    release_date: '',
    imdb_id: '',
    tagline: '',
    videos: {
      results: [],
    },
    homepage: '',
    genres: [],
  });

  React.useEffect(() => {
    setLoading(true);
    Api.get(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`)
      .then((response) => response.data)
      .then((response) => markFavoritesAndOnWatchListAndReturn([response]))
      .then((response) => {
        setMovieDetails(response[0]);
        setOnFavorites(response[0].isFavorite);
        setOnWatchList(response[0].isOnWatchList);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        ErrorAlertAndRedirect({
          title: 'Some error has occured!',
          text: error.response.data.status_message,
          onButtonText: 'Go to Home Page',
          onOkAction: () => history.push('/'),
        });
      });
  }, [id, history]);

  const [onFavorites, setOnFavorites] = React.useState(movieDetails.isFavorite);
  const [onWatchList, setOnWatchList] = React.useState(movieDetails.isOnWatchList);

  return (
    <>
      {
        loading
          ? <p>Loading...</p>
          : (
            <>
              <MainMovieContainer
                key={id}
                backgroundImage={`${process.env.REACT_APP_IMAGE_BASE_URL}original${movieDetails.backdrop_path}`}
              >
                <MainMoviePoster
                  src={`${process.env.REACT_APP_IMAGE_BASE_URL}w300${movieDetails.poster_path}`}
                />
                <MainMovieMeta>
                  <MainMovieTopic>
                    {
                      movieDetails.genres
                        .slice(0, 2)
                        .map((genre) => genre.name)
                        .join(' / ')
                    }
                  </MainMovieTopic>
                  <MainMovieTitle>
                    {movieDetails.title}
                  </MainMovieTitle>
                  <MainMovieVoteAverage>
                    {`${movieDetails.vote_average}/10`}
                  </MainMovieVoteAverage>
                  <MainMovieReleaseDate>
                    {`Release: ${movieDetails.release_date.slice(0, 4)}`}
                  </MainMovieReleaseDate>
                  <MainMovieDescription>
                    {movieDetails.overview}
                  </MainMovieDescription>
                  <MainMovieActionsContainer>
                    <LinkButton
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`}
                      fontColor="black"
                      bgColor={theme.light}
                    >
                      IMDB Page
                    </LinkButton>
                    <Button
                      text={onWatchList ? 'Remove from Watch List' : 'Add to Watch List'}
                      icon={onWatchList ? 'playlist_add_check' : 'playlist_add'}
                      bgColor={theme.info}
                      fontColor={theme.light}
                      onClick={() => {
                        handleWatchListClick(movieDetails);
                        setOnWatchList(!onWatchList);
                      }}
                    />
                    <Button
                      text={onFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                      icon={onFavorites ? 'star' : 'star_border'}
                      bgColor={theme.emphasys}
                      fontColor={theme.darkDeepest}
                      onClick={() => {
                        handleFavoriteClick(movieDetails);
                        setOnFavorites(!onFavorites);
                      }}
                    />
                  </MainMovieActionsContainer>
                </MainMovieMeta>
              </MainMovieContainer>
              <GridWithTitleTitle> Trailers and Videos </GridWithTitleTitle>
              <GridFrame center>
                {
                  movieDetails.videos.results.map(({ key, name }) => (
                    <MovieVideo
                      key={key}
                      title={name}
                      src={`https://www.youtube.com/embed/${key}`}
                      allowFullScreen
                    />
                  ))
                }
              </GridFrame>
            </>
          )
    }
    </>
  );
};
