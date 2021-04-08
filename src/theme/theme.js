import { createMuiTheme } from "@material-ui/core";

export const appTheme = createMuiTheme({
  typography: {
    fontFamily: ['"Poppins"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#1684EB",
    },
  },
  shape: {
    borderRadius: "8px",
  },
  overrides: {
    MuiButton: {
      root: {
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
