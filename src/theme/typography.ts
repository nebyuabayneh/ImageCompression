// ** Theme Type Import
import { Theme } from "@mui/material/styles";

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontSize: 52,
      fontWeight: 400,
      fontStyle: "italic",
    },
    h2: {
      fontWeight: 400,
      fontSize: 42,
      color: theme.palette.text.primary,
    },
    h3: {
      fontWeight: 400,
      color: theme.palette.text.primary,
    },
    h4: {
      fontWeight: 400,
      color: theme.palette.text.primary,
    },
    h5: {
      fontWeight: 400,
      color: theme.palette.text.primary,
    },
    h6: {
      color: theme.palette.text.primary,
    },
    subtitle1: {
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    subtitle2: {
      letterSpacing: "0.1px",
      color: theme.palette.text.secondary,
    },
    body1: {
      // fontSize: 18,
      lineHeight: 1.25,
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    body2: {
      // fontSize: 12,
      // lineHeight: 1.5,
      lineHeight: 1.25,
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    button: {
      letterSpacing: "0.3px",
      color: theme.palette.text.primary,
    },
    caption: {
      letterSpacing: "0.4px",
      color: theme.palette.text.secondary,
    },
    overline: {
      letterSpacing: "1px",
      color: theme.palette.text.secondary,
    },
  };
};

export default Typography;
