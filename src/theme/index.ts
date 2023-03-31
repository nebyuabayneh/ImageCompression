import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

let theme = createTheme({
  palette: palette(),
  spacing: 2,
  typography: {
    fontFamily: "Garamond, Work Sans",
  },
});

theme = createTheme(theme, {
  typography: { ...typography(theme) },
});

theme = responsiveFontSizes(theme);

export default theme;
