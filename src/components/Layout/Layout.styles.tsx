import { createGlobalStyle, DefaultTheme } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      bgPrimary: string
      bgSecondary: string
      font: string
      border: string
    }
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#4598f7",
    secondary: "#25953b",
    bgPrimary: "#11151c",
    bgSecondary: "#171c24",
    font: "#d3dbe3",
    border: "#2f363e",
  },
}
