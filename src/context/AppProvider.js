import React, { createContext, useState } from "react";

const AppContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

function AppProvider({ children }) {
  const [app, setApp] = useState([]);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={setApp}>
          {children}
          {/* TODO: APP DATA SOON */}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext, AppDispatchContext };