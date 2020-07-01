import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NotFound } from 'screens';

afterEach(cleanup);

describe('Not Found Page tests', () => {
  it('Should match the snapshot for "NotFound" screen', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment(<NotFound />)).toMatchSnapshot();
  });
});
