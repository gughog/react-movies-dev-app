import {
  setFavorite,
  removeFromFavorites,
  setToWatchList,
  removeFromWatchList,
  getFavorites,
  getWatchList,
} from 'services/Storage.service';

/**
 * Toggle method that adds or removes a movie to favorite's movie list.
 * @param movie - Movie object.
 */
export const handleFavoriteClick = (movie: MovieCardProps) => {
  if (movie.isFavorite) {
    removeFromFavorites(movie.id);
    if (movie.fetchFavorites) movie.fetchFavorites();
    return true;
  }
  setFavorite(movie);
  if (movie.fetchFavorites) movie.fetchFavorites();
  return true;
};

/**
 * Toggle method that adds or removes a movie to watch list's movie list.
 * @param movie - Movie object.
 */
export const handleWatchListClick = (movie: MovieCardProps) => {
  if (movie.isOnWatchList) {
    removeFromWatchList(movie.id);
    if (movie.fetchWatchList) movie.fetchWatchList();
    return true;
  }
  setToWatchList(movie);
  if (movie.fetchWatchList) movie.fetchWatchList();
  return true;
};

/**
 * Method that "flags" all fetched data from api that is already added as
 * "favorite" or in "watch later" and returns It.
 * @param movies - Array of movie objects.
 */
export const markFavoritesAndOnWatchListAndReturn = (movies: MovieDetails[]) => {
  const moviesCopy = movies || [];
  const favoriteMoviesCopy = getFavorites() || [];
  const watchListMoviesCopy = getWatchList() || [];

  for (let i = 0; i < moviesCopy.length; i += 1) {
    for (let j = 0; j < favoriteMoviesCopy.length; j += 1) {
      if (moviesCopy[i].id === favoriteMoviesCopy[j].id && favoriteMoviesCopy[j].isFavorite) {
        moviesCopy[i].isFavorite = true;
      }
    }
    for (let j = 0; j < watchListMoviesCopy.length; j += 1) {
      if (moviesCopy[i].id === watchListMoviesCopy[j].id && watchListMoviesCopy[j].isOnWatchList) {
        moviesCopy[i].isOnWatchList = true;
      }
    }
  }

  return moviesCopy;
};
