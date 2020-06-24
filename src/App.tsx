import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';

import { Navbar } from 'components';
import { GlobalStyle } from 'components/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle fontColor={theme.light} bodyColor={theme.darkDeepest} />
    <Navbar title="MOVIES DEV" />
  </ThemeProvider>
);

export default App;
