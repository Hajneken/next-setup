// Fonts
import "@fontsource/roboto-slab/300.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/700.css";

import type { AppProps } from "next/app";

import Layout from "../layout";

// styling and responsive fonts
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.scss";
import MainTheme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import Analytics from "../components/Analytics/Analytics";
import Head from "next/head";
// For zoomable images
// import { Zoom } from "@mui/material";

function App({ Component, pageProps }: AppProps) {
  const finalTheme = responsiveFontSizes(MainTheme);
  return (
    <>
      <Analytics
        GAId="XXXXXXX"
        GTMsrc="https://googletagmanager.com/badabum"
      ></Analytics>

      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
