import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from 'components';

afterEach(cleanup);

let onWatchList = false;

describe('Button component tests', () => {
  it('Should match the snapshot for "Button" without icon component', () => {
    const { asFragment } = render(
      <Button
        id="buttonComponent"
        icon={onWatchList ? 'star' : 'star_border'}
        bgColor="black"
        fontColor="white"
        onClick={() => {
          onWatchList = !onWatchList;
        }}
      />,
    );
    expect(asFragment(<Button />)).toMatchSnapshot();
  });

  it('Should toggle icon on click on "Button"', () => {
    const { getByTestId } = render(
      <Button
        id="buttonComponent"
        icon={onWatchList ? 'star' : 'star_border'}
        bgColor="black"
        fontColor="white"
        onClick={() => {
          onWatchList = !onWatchList;
        }}
      />,
    );

    fireEvent.click(getByTestId('buttonComponent'));
    expect(getByTestId('buttonComponent')).toHaveTextContent('star');

    fireEvent.click(getByTestId('buttonComponent'));
    expect(getByTestId('buttonComponent')).toHaveTextContent('star_border');
  });
});
