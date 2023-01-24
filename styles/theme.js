import {Roboto} from "@next/font/google";
import {Inter} from "@next/font/google";
import {createTheme} from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const inter = Inter({subsets: ["latin"]});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        input: {
          padding: "12px 16px",
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FFCA28",
    },
    secondary: {
      main: "#4B4B4B",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#1F1F1F",
      item: "#323232",
    },
    text: {
      gray: "#7E7E7E",
      selected: "#1F1F1F",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h5: {
      fontFamily: inter.style.fontFamily,
      fontSize: 16,
      fontWeight: 500,
    },
  },
});

export default theme;
