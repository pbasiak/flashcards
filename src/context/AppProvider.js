import { ThemeProvider, useMediaQuery, useTheme } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { NOTIFICATION_DURATION } from "../const/durations";
import { appTheme } from "../theme/theme";

const initialState = {
  sidebar: {
    open: true,
  },
};

const AppContext = createContext(initialState);

const mobile = {
  vertical: "bottom",
  horizontal: "center",
};

const desktop = {
  vertical: "top",
  horizontal: "right",
};

function AppProvider({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [snackConfig, setSnackConfig] = useState(desktop);
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "set sidebar":
        const newState = {
          ...state,
          sidebar: {
            open: action.payload,
          },
        };
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  useEffect(() => {
    if (matches) {
      return setSnackConfig(desktop);
    }

    return setSnackConfig(mobile);
  });

  return (
    <SnackbarProvider anchorOrigin={snackConfig} autoHideDuration={NOTIFICATION_DURATION}>
      <AppContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
      </AppContext.Provider>
    </SnackbarProvider>
  );
}

export { AppProvider, AppContext as store };
