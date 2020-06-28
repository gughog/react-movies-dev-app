import * as React from 'react';
import { GridFrame } from 'components/global-styles';
import { MovieCard, SearchInput } from 'components';
import { SearchPageTitle, SearchPageResultsText } from './styles';

export const SearchPage: React.FC = () => {
  const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <SearchPageTitle>
        Search for Movies
      </SearchPageTitle>
      <SearchInput />
      <SearchPageResultsText>
        Results (999):
      </SearchPageResultsText>
      <GridFrame>
        {
          movies.map((movie) => (
            <MovieCard />
          ))
        }
      </GridFrame>
    </>
  );
};
