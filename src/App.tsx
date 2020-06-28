import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';

import { Navbar, Footer } from 'components';
import { HomePage } from 'screens';
import { GlobalStyle } from 'components/global-styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle fontColor={theme.light} bodyColor={theme.darkDeepest} />
    <Navbar title="MOVIES DEV" />
    <HomePage />
    <Footer />
  </ThemeProvider>
);

export default App;
