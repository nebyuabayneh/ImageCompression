import { PaletteMode } from "@mui/material";

const DefaultPalette = () => {
  const darkColor = "0, 0, 0";
  const mainColor = darkColor;
  const mode = "light" as PaletteMode;
  return {
    primary: {
      light: "#847D7A",
      main: "#332F2E",
      dark: "#2B2221",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#F0544A",
      main: "#E7131A",
      dark: "#C60D24",
      contrastText: "#FFF",
    },
    success: {
      light: "#B6D359",
      main: "#91B72A",
      dark: "#779D1E",
      contrastText: "#FFF",
    },
    error: {
      light: "#FA6BA2",
      main: "#F73B96",
      dark: "#D42B8D",
      contrastText: "#FFF",
    },
    warning: {
      light: "#EFC251",
      main: "#E5A51B",
      dark: "#C48713",
      contrastText: "#FFF",
    },
    info: {
      light: "#50CAEA",
      main: "#1CA7DD",
      dark: "#1482BE",
      contrastText: "#FFF",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },

    mode: mode,
    background: {
      paper: mode === "light" ? "#fff" : "#191D28",
      default: mode === "light" ? "#fff" : "#191D28",
    },
    text: {
      primary: `#000`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;
