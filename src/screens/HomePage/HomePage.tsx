import * as React from 'react';
import { MainMovie, MovieCard } from 'components';
import { GridWithTitleTitle } from 'components/GridWithTitle/styles';
import { GridFrame } from 'components/global-styles';
import { ErrorAlert } from 'components/SweetAlert';

import Api from 'services/Api.service';
import { markFavoritesAndOnWatchListAndReturn } from 'helpers/click.handlers';

export const HomePage = () => {
  const [loading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState<MovieProps[]>();
  const [mainMovie, setmainMovie] = React.useState<MovieProps>({
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
    isFavorite: false,
    isOnWatchList: false,
  });

  React.useEffect(() => {
    setLoading(true);
    Api.get(`movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((response) => response.data.results)
      .then((result) => markFavoritesAndOnWatchListAndReturn(result))
      .then((result) => {
        setMovies(result);
        setmainMovie(result[0]);
      })
      .then(() => setLoading(false))
      .catch((error) => {
        ErrorAlert({ title: 'Some error has occured', text: error });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {
        loading
          ? 'loading...'
          : (
            <MainMovie
              id={mainMovie.id}
              title={mainMovie.title}
              backdrop_path={mainMovie.backdrop_path}
              poster_path={mainMovie.poster_path}
              overview={mainMovie.overview}
              release_date={mainMovie.release_date}
              vote_average={mainMovie.vote_average}
              isFavorite={mainMovie.isFavorite}
              isOnWatchList={mainMovie.isOnWatchList}
            />
          )
      }
      <GridWithTitleTitle> More on Popular </GridWithTitleTitle>
      <GridFrame center>
        {
          movies && movies.map(({
            id,
            poster_path,
            title,
            release_date,
            overview,
            isFavorite,
            isOnWatchList,
          }) => (
            <MovieCard
              key={id}
              id={id}
              poster_path={poster_path}
              title={title}
              release_date={release_date}
              overview={overview}
              isFavorite={isFavorite}
              isOnWatchList={isOnWatchList}
            />
          ))
        }
      </GridFrame>
    </>
  );
};
