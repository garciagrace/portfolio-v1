import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyles from './Global';
import { Hero, NavBar } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NavBar />
      <Hero />
    </ThemeProvider>
  );
};

export default App;
