import { colors, createTheme } from "@mui/material";
// import "../assets/fonts/include.scss";
import "./Mui_Custom.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF200",
    },
    secondary: {
      main: "#542E90",
    },
    success: {
      main: "#18CB5F",
      lightest: "#D4EEDE",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#CB1818",
      lightest: "#EED4D4",
    },
    warning: {
      main: "#F19B02",
      lightest: "#FDF0D9",
      contrastText: "#FFF",
    },
    background: {
      paper: "#F3F5F7",
      default: "#FFFFFF",
      med: "#D2DCEA",
    },
    text: {
      primary: "#004693",
      secondary: colors.grey[600],
      disabled: colors.grey[600],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ['"Montserrat"', "sans-serif"],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
  },
  typography: {
    fontFamily: [
      "TheSans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
