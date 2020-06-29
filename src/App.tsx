import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';
import { Navbar, Footer } from 'components';
import { HomePage, SearchPage, MovieDetailsPage } from 'screens';
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
          <SearchPage />
        </Route>
        <Route path="/favorites">
          Favorites
        </Route>
        <Route path="/watchlist">
          Watch List
        </Route>
        <Route path="/movie/:id">
          <MovieDetailsPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
