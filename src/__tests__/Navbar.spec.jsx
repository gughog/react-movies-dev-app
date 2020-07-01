import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navbar } from 'components';

afterEach(cleanup);

describe('Navbar component tests', () => {
  it('Should match the snapshot for "Navbar" component', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    );
    expect(asFragment(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    )).toMatchSnapshot();
  });

  it('Should navigate to "/" route when click on Logo on "Navbar"', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    );

    fireEvent.click(getByText(/movies dev/i));
    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/',
      search: '',
      state: null,
    });
  });

  it('Should navigate to "/search" route when click on Search tab on "Navbar"', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    );

    fireEvent.click(getByText(/Search/i));
    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/search',
      search: '',
      state: null,
    });
  });

  it('Should navigate to "/watchlist" route when click on Watch Later tab on "Navbar"', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    );

    fireEvent.click(getByText(/Watch Later/i));
    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/watchlist',
      search: '',
      state: null,
    });
  });

  it('Should navigate to "/favorites" route when click on Favorites tab on "Navbar"', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <Navbar title="MOVIES DEV" />
      </Router>,
    );

    fireEvent.click(getByText(/Favorites/i));
    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/favorites',
      search: '',
      state: null,
    });
  });
});
