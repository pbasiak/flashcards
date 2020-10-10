import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';

const API_URL = 'http://localhost:1337';

const DecksApiContext = createContext(undefined);
const DecksApiDispatchContext = createContext(undefined);

function ApiCall({ children }) {
  const setDecks = useContext(DecksApiDispatchContext);

  useEffect(() => {
    axios.get(`${API_URL}/decks`).then(response => {
      setDecks(response.data);
    });
  }, [setDecks]);

  return <>{children}</>
}

function DecksApiProvider({ children }) {
  const [decks, setDecks] = useState([]);

  return (
    <DecksApiContext.Provider value={decks}>
      <DecksApiDispatchContext.Provider value={setDecks}>
        <ApiCall>
          {decks.length ? children : 'Loading'}
        </ApiCall>
      </DecksApiDispatchContext.Provider>
    </DecksApiContext.Provider>
  );
}

export { DecksApiProvider, DecksApiContext, DecksApiDispatchContext };