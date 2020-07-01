import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FavoritesPage } from 'screens';

afterEach(cleanup);

describe('Favorites Page tests', () => {
  it('Should match the snapshot for "FavoritesPage" screen', () => {
    const { asFragment } = render(<FavoritesPage />);
    expect(asFragment(<FavoritesPage />)).toMatchSnapshot();
  });
});
