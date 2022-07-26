import {RecoilRoot} from "recoil";
import {CacheProvider} from "@emotion/react";
import {responsiveFontSizes, ThemeProvider} from "@mui/material";
import ThemeFile from "/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {ToastContainer} from "material-react-toastify";
import createEmotionCache from "@Functions/emotionCache";

import "material-react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const theme = responsiveFontSizes(ThemeFile);

  return (
    <CacheProvider value={emotionCache}>
      <RecoilRoot>
        {/* <Header /> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          {/* <MiddleApp> */}
          <Component {...pageProps} />
          {/* </MiddleApp> */}
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}

export default MyApp;
