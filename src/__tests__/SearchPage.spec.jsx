import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SearchPage } from 'screens';

afterEach(cleanup);

describe('Search Page tests', () => {
  it('Should match the snapshot for "SearchPage" screen', () => {
    const { asFragment } = render(<SearchPage />);
    expect(asFragment(<SearchPage />)).toMatchSnapshot();
  });
});
