import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global'
import theme from "styles/theme";

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.black
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} removeBg>
      <GlobalStyle  />
      <Story />
    </ThemeProvider>
  )
];
