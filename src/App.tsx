import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';
import { Navbar, Footer } from 'components';
import { GlobalStyle } from 'components/global-styles';
import {
  HomePage,
  SearchPage,
  MovieDetailsPage,
  FavoritesPage,
  WatchLaterPage,
  NotFound,
} from 'screens';

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
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/watchlist" component={WatchLaterPage} />
        <Route path="/movie/:id" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
