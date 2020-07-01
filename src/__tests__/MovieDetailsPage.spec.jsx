import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MovieDetailsPage } from 'screens';

afterEach(cleanup);

describe('Movie Details Page tests', () => {
  it('Should match the snapshot for "MovieDetailsPage" screen', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <MovieDetailsPage />
      </MemoryRouter>,
    );
    expect(asFragment(
      <MemoryRouter>
        <MovieDetailsPage />
      </MemoryRouter>,
    )).toMatchSnapshot();
  });
});
