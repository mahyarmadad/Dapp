import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider} from "@emotion/react";
import Header from "@Components/Header";
import theme from "styles/theme";
import createEmotionCache from "@Functions/createEmotionCache";
import {RecoilRoot} from "recoil";
import "styles/globals.css";
// import {SnackbarProvider} from "notistack";
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <Header />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <SnackbarProvider> */}
          <Component {...pageProps} />
          {/* </SnackbarProvider> */}
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
