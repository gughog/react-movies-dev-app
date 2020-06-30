import { SuccessToast } from 'components/SweetAlert';

const FAVORITES_STORAGE = 'userFavorites';
const WATCHLIST_STORAGE = 'userWatchList';

/**
 * Handles the process of saving a movie in favorite's local storage. If the
 * movie is already added, calls the removeFromFavorites's method instead.
 * @param movie - Movie object.
 */
export const setFavorite = (movie: MovieCardProps) => {
  const previousData = localStorage.getItem(FAVORITES_STORAGE);

  if (previousData) {
    const parsedData = JSON.parse(previousData);
    const isDuplicated: boolean = parsedData.some((savedMovie: MovieCardProps) => (
      savedMovie.id === movie.id
    ));

    if (isDuplicated) {
      removeFromFavorites(movie.id);
      return false;
    }

    const newData = [...parsedData, { ...movie, isFavorite: true }];
    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newData));

    SuccessToast({ title: 'The movie was added to your favorites!' });
    return true;
  }

  localStorage.setItem(FAVORITES_STORAGE, JSON.stringify([{ ...movie, isFavorite: true }]));
  SuccessToast({ title: 'The movie was added to your favorites!' });
  return true;
};

/**
 * Handles the process of removing a movie in favorite's local storage by
 * It's ID.
 * @param id - Movie's ID.
 */
export const removeFromFavorites = (id: number) => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const newData = parsedData.filter((movie: MovieCardProps) => movie.id !== id);

    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newData));
    SuccessToast({ title: 'The movie was removed from your favorites!' });
  }
};

/**
 * Get all favorites from local storage and returns the array parsed to
 * JSON.
 */
export const getFavorites = () => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return null;
};

// =============================================================
/**
 * Handles the process of saving a movie in watch list's local storage. If the
 * movie is already added, calls the removeFromWatchList's method instead.
 * @param movie - Movie object.
 */
export const setToWatchList = (movie: MovieCardProps) => {
  const previousData = localStorage.getItem(WATCHLIST_STORAGE);

  if (previousData) {
    const parsedData = JSON.parse(previousData);
    const isDuplicated: boolean = parsedData.some((savedMovie: MovieCardProps) => (
      savedMovie.id === movie.id
    ));

    if (isDuplicated) {
      removeFromWatchList(movie.id);
      return false;
    }

    const newData = [...parsedData, { ...movie, isOnWatchList: true }];
    localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify(newData));

    SuccessToast({ title: 'The movie was added to your watch list!' });
    return true;
  }

  localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify([{ ...movie, isOnWatchList: true }]));
  SuccessToast({ title: 'The movie was added to your watch list!' });
  return true;
};

/**
 * Handles the process of removing a movie in watch list's local storage by
 * It's ID.
 * @param id - Movie's ID.
 */
export const removeFromWatchList = (id: number) => {
  const storedData = localStorage.getItem(WATCHLIST_STORAGE);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const newData = parsedData.filter((movie: MovieCardProps) => movie.id !== id);

    localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify(newData));
    SuccessToast({ title: 'The movie was removed from your watch list!' });
  }
};

/**
 * Get all list of watch later movies from local storage and returns the
 * array parsed to JSON.
 */
export const getWatchList = () => {
  const storedData = localStorage.getItem(WATCHLIST_STORAGE);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return null;
};
