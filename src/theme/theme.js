import { createMuiTheme } from "@material-ui/core";
import { COLOR_PALETTE } from "./palette";

export const appTheme = createMuiTheme({
  typography: {
    fontFamily: ['"Poppins"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: COLOR_PALETTE.PRIMARY.MAIN,
    },
    secondary: {
      main: COLOR_PALETTE.SECONDARY.MAIN,
    },
    error: {
      main: COLOR_PALETTE.ERROR.MAIN,
    },
    warning: {
      main: COLOR_PALETTE.WARNING.MAIN,
    },
    success: {
      main: COLOR_PALETTE.SUCCESS.MAIN,
    },
    info: {
      main: COLOR_PALETTE.INFO.MAIN,
    }
  },
  shape: {
    borderRadius: "8px",
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "8px 20px",
      },
      outlined: {
        padding: "8px 20px",
      },
      contained: {
        boxShadow: "4px 4px 0px #CCD6E1",

        "&:hover": {
          boxShadow: "4px 4px 0px #ADBBCA",
        },
      },
    },
  },
});

// COLORS: https://material-ui.com/customization/default-theme/?expand-path=$.palette.primary
