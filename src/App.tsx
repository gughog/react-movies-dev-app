import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';
import { Navbar, Footer } from 'components';
import { HomePage, MovieList } from 'screens';
import { GlobalStyle } from 'components/global-styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle fontColor={theme.light} bodyColor={theme.darkDeepest} />
    <Router>
      <Navbar title="MOVIES DEV" />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <MovieList pageTitle="Searching" />
        </Route>
        <Route path="/favorites">
          <MovieList pageTitle="My Favorites" />
        </Route>
        <Route path="/watchlist">
          <MovieList pageTitle="My Watch List" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
