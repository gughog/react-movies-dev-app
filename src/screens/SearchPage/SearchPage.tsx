import * as React from 'react';
import Api from 'services/Api.service';
import cinema from 'assets/cinema.svg';
import { GridFrame } from 'components/global-styles';
import { MovieCard, SearchInput, NoData } from 'components';
import { SearchPageTitle, SearchPageResultsText } from './styles';

export const SearchPage: React.FC = () => {
  const [searchMovies, setSearchMovies] = React.useState<SearchMoviesProps>();

  const fetchMoviesByQuery = async (query: string) => {
    try {
      const response = await Api.get(`search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      setSearchMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderResponse = () => {
    if (searchMovies && searchMovies.results) {
      return <NoData title="Oops, no movie was found!" icon={cinema} />;
    }

    return <NoData title="Start to search a movie by title!" icon={cinema} />;
  };

  return (
    <>
      <SearchPageTitle>
        Search for Movies
      </SearchPageTitle>
      <SearchInput
        placeholder="E.g.: Star Wars"
        searchHandler={fetchMoviesByQuery}
      />
      {
        searchMovies && searchMovies.results.length > 0
          ? (
            <>
              <SearchPageResultsText>
                {`Showing results (${searchMovies.results.length}):`}
              </SearchPageResultsText>
              <GridFrame center>
                {
                  searchMovies && searchMovies.results.map(({
                    id,
                    backdrop_path,
                    original_title,
                    release_date,
                    overview,
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
            </>
          )
          : renderResponse()
      }
    </>
  );
};
