import { ThemeProvider } from "@material-ui/core";
import React, { createContext, useState } from "react";
import { appTheme } from '../theme/theme';

const AppContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

function AppProvider({ children }) {
  const [app, setApp] = useState([]);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={setApp}>
        <ThemeProvider theme={appTheme}>
          {children}
        </ThemeProvider>
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, AppDispatchContext };