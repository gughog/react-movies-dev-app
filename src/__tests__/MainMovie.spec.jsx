import React from 'react';
import { render, cleanup } from '@testing-library/react';
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

  it('Should render component correctly with props', () => {
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
});
