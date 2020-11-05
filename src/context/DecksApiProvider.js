import React, { createContext, useState, useEffect } from "react";

import LoginLoading from "../components/LoginLoading/LoginLoading";
import { useIsPublicRoute } from "../hooks/usePublicRoutes";
import { useLocation } from "react-router-dom";
import { useRequestDecks } from "../hooks/useDecks";

const DecksApiContext = createContext(undefined);
const DecksApiDispatchContext = createContext(undefined);

function ApiCall({ children }) {
  const requestDecks = useRequestDecks();

  useEffect(() => {
    requestDecks();
  }, []);

  return <>{children}</>
}

function DecksApiProvider({ children }) {
  const [decks, setDecks] = useState([]);
  const location = useLocation();
  const isPublicRoute = useIsPublicRoute(location.pathname);

  return (
    <DecksApiContext.Provider value={decks}>
      <DecksApiDispatchContext.Provider value={setDecks}>
        <ApiCall>
          {decks.length || isPublicRoute ? children : <LoginLoading title="Decks" />}
        </ApiCall>
      </DecksApiDispatchContext.Provider>
    </DecksApiContext.Provider>
  );
}

export { DecksApiProvider, DecksApiContext, DecksApiDispatchContext };