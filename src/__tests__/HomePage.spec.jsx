import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { HomePage } from 'screens';

afterEach(cleanup);

describe('Home Page tests', () => {
  it('Should match the snapshot for "HomePage" screen', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment(<HomePage />)).toMatchSnapshot();
  });
});
