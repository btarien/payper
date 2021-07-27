import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(89, 210, 188, 1)",
      main: "rgba(20, 160, 140, 1)",
      dark: "rgba(0, 113, 95, 1)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#04009A",
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        background: "white",
      },
    },
  },
});
export default theme;
