import { createMuiTheme } from "@material-ui/core";

export const appTheme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Poppins"',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#1684EB',
        }
    }
});

// COLORS: https://material-ui.com/customization/default-theme/?expand-path=$.palette.primary