import * as React from 'react';
import { MainMovie, CategoriesGrid, MovieCard } from 'components';
import { CategoriesGridTitle } from 'components/CategoriesGrid/styles';
import { GridFrame } from 'components/global-styles';

import Api from 'services/Api.service';

export const HomePage = () => {
  const categories = [
    {
      title: 'Upcomings',
      bgColor: 'linear-gradient(to right, #16222a, #3a6073)',
      fontColor: '',
    },
    {
      title: 'Top Rateds',
      bgColor: 'linear-gradient(to right, #3e5151, #decba4)',
      fontColor: '',
    },
    {
      title: 'Popular',
      bgColor: 'linear-gradient(to right, #a8c0ff, #3f2b96)',
      fontColor: '',
    },
    {
      title: 'Now Playing',
      bgColor: 'linear-gradient(to right, #403b4a, #e7e9bb)',
      fontColor: '',
    },
    {
      title: 'Latests',
      bgColor: 'linear-gradient(to right, #000000, #434343)',
      fontColor: '',
    },
  ];

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
  });

  React.useEffect(() => {
    setLoading(true);
    Api.get(`popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((response) => response.data.results)
      .then((result) => {
        setMovies(result);
        setmainMovie(result[0]);
      })
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {
        loading
          ? 'loading...'
          : (
            <MainMovie
              id={mainMovie.id}
              title={mainMovie.title}
              backdropImage={mainMovie.backdrop_path}
              image={mainMovie.poster_path}
              description={mainMovie.overview}
              releaseDate={mainMovie.release_date}
              votes={mainMovie.vote_average}
            />
          )
      }
      <CategoriesGridTitle> More on Popular </CategoriesGridTitle>
      <GridFrame>
        {
          movies && movies.map(({
            id, backdrop_path, original_title, release_date, overview,
          }) => (
            <MovieCard
              key={id}
              id={id}
              image={backdrop_path}
              title={original_title}
              releaseDate={release_date}
              description={overview}
            />
          ))
        }
      </GridFrame>
      <CategoriesGrid title="Browser by Categories" data={categories} />
    </div>
  );
};
