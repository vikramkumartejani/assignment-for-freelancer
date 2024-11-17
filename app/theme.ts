import { createTheme, ThemeOptions } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      borderColor: string;
      headerBackground: string;
      searchBarColor: string;
      drawerBackground: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      borderColor: string;
      headerBackground: string;
      searchBarColor: string;
      drawerBackground: string;
    };
  }
}

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#2F4256",
    },
    secondary: {
      main: "#58728D",
    },
    background: {
      default: "#F9FAFB",
    },
  },

  typography: {
    h1: {
      fontSize: "24px",
      fontWeight: 800,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
    },
  },

  custom: {
    borderColor: "#6C849D2E",
    headerBackground: "#192839",
    searchBarColor: "#243547",
    drawerBackground: "#192839",
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
