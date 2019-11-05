import { createMuiTheme } from "@material-ui/core";

const green = "#71A850";
const lightGreen = "#DDF1D0";
const blue = "#1978BE";
const yellow = "#F6C000";
const gray = "#CCCCCC";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green,
      light: lightGreen
    },
    secondary: {
      main: blue
    },
    yellow: {
      main: yellow
    },
    gray: {
      main: gray
    }
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    h1: {
      fontSize: "2rem"
    },
    h2: {
      fontSize: "1.5rem"
    },
    subtitle1: {
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1rem"
    },
    body2: {
      fontSize: "0.875rem"
    },
    caption: {
      fontSize: "0.875rem"
    }
  }
});

export default theme;
