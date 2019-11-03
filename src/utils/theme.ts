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
  }
});

export default theme;
