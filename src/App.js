import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import GlobalStyles from './Global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
