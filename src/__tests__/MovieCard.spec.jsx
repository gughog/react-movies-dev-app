import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieCard } from 'components';

const mockMovieProps = (favorite = false, onwatchlist = false) => ({
  poster_path: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
  overview: 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
  release_date: '2016-08-03',
  id: 297761,
  title: 'Suicide Squad',
  isFavorite: favorite,
  isOnWatchList: onwatchlist,
});

afterEach(cleanup);

describe('Movie Card component tests', () => {
  it('Should match the snapshot for "MovieCard" component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <MovieCard {...mockMovieProps()} />
      </MemoryRouter>,
    );
    expect(asFragment(<MovieCard {...mockMovieProps()} />)).toMatchSnapshot();
  });

  it('Should render component "MovieCard" correctly with props', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <MovieCard {...mockMovieProps()} />
      </MemoryRouter>,
    );

    expect(getByTestId('movieCardPoster')).toHaveAttribute('src', 'undefinedoriginal/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg');
    expect(getByText(/From DC Comics comes the Suicide Squad, an antihero team of incarcerated/i)).toBeInTheDocument();
    expect(getByText('2016')).toBeInTheDocument();
    expect(getByTestId('movieCardClicableTitle')).toHaveTextContent('Suicide Squad');
    expect(getByText('launch')).toBeInTheDocument();
    expect(getByText('playlist_add')).toBeInTheDocument();
    expect(getByText('star_border')).toBeInTheDocument();
  });

  it('Should navigate to route when click on image on "MovieCard"', () => {
    const history = createMemoryHistory();

    history.push = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <MovieCard {...mockMovieProps()} />
      </Router>,
    );

    fireEvent.click(getByTestId('movieCardClicableImage'));
    expect(history.push).toHaveBeenCalledWith('/movie/297761');
  });

  it('Should navigate to route when click on movie title on "MovieCard"', () => {
    const history = createMemoryHistory();

    history.push = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <MovieCard {...mockMovieProps()} />
      </Router>,
    );

    fireEvent.click(getByTestId('movieCardClicableTitle'));
    expect(history.push).toHaveBeenCalledWith('/movie/297761');
  });

  it('Should navigate to route when click on See Details button on "MovieCard"', () => {
    const history = createMemoryHistory();

    history.push = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <MovieCard {...mockMovieProps()} />
      </Router>,
    );

    fireEvent.click(getByTestId('movieCardGoToDetailsButton'));
    expect(history.push).toHaveBeenCalledWith('/movie/297761');
  });

  it('Should toggle icon on click on Add/Remove to Watch List button on "MovieCard"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MovieCard {...mockMovieProps()} />
      </MemoryRouter>,
    );

    fireEvent.click(getByTestId('movieCardToggleAddToList'));
    expect(getByTestId('movieCardToggleAddToList')).toHaveTextContent('playlist_add_check');
  });

  it('Should toggle icon on click on Add/Remove to favorites button on "MovieCard"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MovieCard {...mockMovieProps()} />
      </MemoryRouter>,
    );

    fireEvent.click(getByTestId('movieCardToggleAddToFavorites'));
    expect(getByTestId('movieCardToggleAddToFavorites')).toHaveTextContent('star');
  });
});
