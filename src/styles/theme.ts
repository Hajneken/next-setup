import { createTheme } from "@mui/material/styles";

const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#6E00EE",
    },
    common: { white: "#F9F9F9" },
    secondary: {
      main: "#D1C4E9",
    },
    background: { paper: "#F9F9F9", default: "#F9F9F9" },
  },
  typography: {
    fontFamily: [
      '"Roboto Slab"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: { fontSize: "9.6rem" },
    h2: { fontSize: "6rem" },
    h3: { fontSize: "4.8rem" },
    h4: { fontSize: "3.4rem" },
    h5: { fontSize: "2.4rem" },
    h6: { fontSize: "2rem" },
    subtitle1: { fontSize: "1.6rem" },
    subtitle2: { fontSize: "1.4rem" },
    body1: { fontSize: "1.6rem" },
    body2: { fontSize: "1.4rem" },
    button: { fontSize: "1.4rem" },
    caption: { fontSize: "1.2rem" },
    overline: { fontSize: "1rem" },
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

export default MainTheme;
