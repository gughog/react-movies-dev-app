import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WatchLaterPage } from 'screens';

afterEach(cleanup);

describe('Watch Later page tests', () => {
  it('Should match the snapshot for "WatchPage" screen', () => {
    const { asFragment } = render(<WatchLaterPage />);
    expect(asFragment(<WatchLaterPage />)).toMatchSnapshot();
  });
});
