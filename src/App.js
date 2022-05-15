import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyles from './Global';
import {
  About,
  Contact,
  Email,
  Footer,
  Hero,
  NavBar,
  Projects,
  Social,
} from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NavBar />
      <Social />
      <Email />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
