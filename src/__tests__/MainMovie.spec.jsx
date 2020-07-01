import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MainMovie } from 'components';

const mockMovieProps = (favorite = false, onwatchlist = false) => ({
  poster_path: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
  backdrop_path: '/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg',
  overview: 'From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.',
  release_date: '2016-08-03',
  id: 297761,
  title: 'Suicide Squad',
  vote_average: 5.91,
  isFavorite: favorite,
  isOnWatchList: onwatchlist,
});

afterEach(cleanup);

describe('Main Movie Card component tests', () => {
  it('Should match the snapshot for "MainMovie" component', () => {
    const { asFragment } = render(
      <MainMovie {...mockMovieProps()} />,
    );
    expect(asFragment(<MainMovie {...mockMovieProps()} />)).toMatchSnapshot();
  });

  it('Should render component "MainMovie" with right icons if is favorite/in watch list', () => {
    const { getByTestId } = render(
      <MainMovie {...mockMovieProps(true, true)} />,
    );

    expect(getByTestId('mainMovieToggleWatchList')).toHaveTextContent('playlist_add_check');
    expect(getByTestId('mainMovieToggleFavorite')).toHaveTextContent('star');
  });

  it('Should render component "MainMovie" correctly with props', () => {
    const { getByText, getByTestId } = render(
      <MainMovie {...mockMovieProps()} />,
    );

    expect(getByTestId('mainMovieBackdropImage')).toHaveStyle('background:', 'undefinedw300/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg');
    expect(getByTestId('mainMoviePoster')).toHaveAttribute('src', 'undefinedw300/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg');
    expect(getByText(/From DC Comics comes the Suicide Squad, an antihero team of incarcerated/i)).toBeInTheDocument();
    expect(getByText('Release: 2016')).toBeInTheDocument();
    expect(getByTestId('mainMovieTitle')).toHaveTextContent('Suicide Squad');
    expect(getByText('5.91/10')).toBeInTheDocument();
    expect(getByText('See Details')).toBeInTheDocument();
    expect(getByText('Add to Watch List')).toBeInTheDocument();
    expect(getByText('Add to Favorites')).toBeInTheDocument();
  });

  it('Should navigate to route when click on See Details button on "MainMovie"', () => {
    const history = createMemoryHistory();

    history.push = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <MainMovie {...mockMovieProps()} />
      </Router>,
    );

    fireEvent.click(getByTestId('mainMovieGoToDetails'));
    expect(history.push).toHaveBeenCalledWith('/movie/297761');
  });

  it('Should toggle icon on click on Add/Remove to Watch List button on "MainMovie"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainMovie {...mockMovieProps()} />
      </MemoryRouter>,
    );

    fireEvent.click(getByTestId('mainMovieToggleWatchList'));
    expect(getByTestId('mainMovieToggleWatchList')).toHaveTextContent('playlist_add_check');
  });

  it('Should toggle icon on click on Add/Remove to favorites button on "MainMovie"', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainMovie {...mockMovieProps()} />
      </MemoryRouter>,
    );

    fireEvent.click(getByTestId('mainMovieToggleFavorite'));
    expect(getByTestId('mainMovieToggleFavorite')).toHaveTextContent('star');
  });
});
