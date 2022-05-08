import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyles from './Global';
import { About, Email, Hero, NavBar, Social } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NavBar />
      <Social />
      <Email />
      <Hero />
      <About />
    </ThemeProvider>
  );
};

export default App;
