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
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: green,
        color: "#FFFFFF"
      }
    },
    MuiTabs: {
      root: {
        display: "flex",
        backgroundColor: "#FFFFFF",
        flexGrow: 1.5
      }
    },
    MuiTab: {
      root: {
        textTransform: "none",
        minWidth: 90,
        fontFamily: "Nunito",
        color: "#3C3C3C",
        "&:hover": {
          color: "#71A850",
          opacity: 1
        },
        "&$selected": {
          color: "#71A850"
        },
        "&:focus": {
          color: "#71A850"
        }
      }
    }
  }
});

export default theme;
