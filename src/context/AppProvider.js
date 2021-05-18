import { ThemeProvider } from "@material-ui/core";
import React, { createContext, useReducer } from "react";
import { appTheme } from "../theme/theme";

const initialState = {
  sidebar: {
    open: true,
  },
};

const AppContext = createContext(initialState);

function AppProvider({ children }) {
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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext as store };
