// Fonts
import "@fontsource/roboto-slab/300.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/500.css";
import "@fontsource/roboto-slab/700.css";

import type { AppProps } from "next/app";

import Layout from "../layout";

// styling
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.scss";
import MainTheme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
