import { SuccessToast } from 'components/SweetAlert';

const FAVORITES_STORAGE = 'userFavorites';
const WATCHLIST_STORAGE = 'userWatchList';

export const setFavorite = (movie: MovieCardProps) => {
  const previousData = localStorage.getItem(FAVORITES_STORAGE);

  if (previousData) {
    const parsedData = JSON.parse(previousData);
    const isDuplicated: boolean = parsedData.some((savedMovie: MovieCardProps) => (
      savedMovie.id === movie.id
    ));

    if (isDuplicated) {
      SuccessToast({ title: 'This movie is already on you favorites!', type: 'info' });
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

export const removeFromFavorites = (id: number) => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const newData = parsedData.filter((movie: MovieCardProps) => movie.id !== id);

    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newData));
    SuccessToast({ title: 'The movie was removed from your favorites!' });
  }
};

export const getFavorites = () => {
  const storedData = localStorage.getItem(FAVORITES_STORAGE);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return null;
};

// =============================================================

export const setToWatchList = (movie: MovieCardProps) => {
  const previousData = localStorage.getItem(WATCHLIST_STORAGE);

  if (previousData) {
    const parsedData = JSON.parse(previousData);
    const isDuplicated: boolean = parsedData.some((savedMovie: MovieCardProps) => (
      savedMovie.id === movie.id
    ));

    if (isDuplicated) {
      SuccessToast({ title: 'This movie is already on you watch list!', type: 'info' });
      return false;
    }

    const newData = [...parsedData, { ...movie, isFavorite: true }];
    localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify(newData));

    SuccessToast({ title: 'The movie was added to your watch list!' });
    return true;
  }

  localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify([{ ...movie, isFavorite: true }]));
  SuccessToast({ title: 'The movie was added to your watch list!' });
  return true;
};

export const removeFromWatchList = (id: number) => {
  const storedData = localStorage.getItem(WATCHLIST_STORAGE);

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const newData = parsedData.filter((movie: MovieCardProps) => movie.id !== id);

    localStorage.setItem(WATCHLIST_STORAGE, JSON.stringify(newData));
    SuccessToast({ title: 'The movie was removed from your watch list!' });
  }
};

export const getWatchList = () => {
  const storedData = localStorage.getItem(WATCHLIST_STORAGE);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return null;
};
