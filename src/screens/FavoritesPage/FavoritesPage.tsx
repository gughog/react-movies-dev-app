import * as React from 'react';
import { getFavorites } from 'services/Storage.service';
import cinema from 'assets/cinema.svg';
import { GridFrame } from 'components/global-styles';
import { MovieCard, NoData } from 'components';

import {
  SearchPageTitle as FavoritesPageTitle,
  SearchPageResultsText as FavoritesPageResultsText,
} from 'screens/SearchPage/styles';


export const FavoritesPage: React.FC = () => {
  const [favoriteMovies, setFavoriteMovies] = React.useState<MovieCardProps[]>();

  React.useEffect(() => {
    const data = getFavorites();
    if (data) {
      setFavoriteMovies(data);
    }
  }, []);

  const fetchFavorites = () => {
    const data = getFavorites();
    if (data) {
      setFavoriteMovies(data);
    }
  };

  return (
    <>
      <FavoritesPageTitle>
        My Favorite Movies
      </FavoritesPageTitle>
      {
        favoriteMovies && favoriteMovies.length > 0
          ? (
            <>
              <FavoritesPageResultsText>
                {`Showing results (${favoriteMovies.length}):`}
              </FavoritesPageResultsText>
              <GridFrame center>
                {
                  favoriteMovies && favoriteMovies.map(({
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
                      fetchFavorites={fetchFavorites}
                    />
                  ))
                }
              </GridFrame>
            </>
          )
          : <NoData title="You favorite movies will appear here!" icon={cinema} />
      }
    </>
  );
};
