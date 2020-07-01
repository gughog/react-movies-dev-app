import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchInput } from 'components';

afterEach(cleanup);

describe('Search Input component tests', () => {
  it('Should match the snapshot for "SearchInput" component', () => {
    const onSubmit = jest.fn();
    const { asFragment } = render(<SearchInput />);
    expect(asFragment(
      <SearchInput
        searchHandler={onSubmit}
        placeholder="E.g.: Star Wars"
      />,
    )).toMatchSnapshot();
  });

  it('Should allow user to submit a search text on "SearchInput" component', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <SearchInput
        searchHandler={onSubmit}
        placeholder="E.g.: Star Wars"
      />,
    );

    fireEvent.change(getByPlaceholderText('E.g.: Star Wars'), { target: { value: 'star wars' } });
    expect(getByPlaceholderText('E.g.: Star Wars').value).toBe('star wars');

    fireEvent.click(getByTestId('searchInputButtonSubmit'));
    expect(onSubmit).toHaveBeenCalled();

    fireEvent.submit(getByPlaceholderText('E.g.: Star Wars'));
    expect(onSubmit).toHaveBeenCalled();
  });
  it('Should disallow user to add an empty search text on "SearchInput" component', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        searchHandler={onSubmit}
        placeholder="E.g.: Star Wars"
      />,
    );

    fireEvent.change(getByPlaceholderText('E.g.: Star Wars'), { target: { value: '' } });
    expect(getByPlaceholderText('E.g.: Star Wars').value).not.toBeNull();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
