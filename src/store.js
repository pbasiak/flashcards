import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';

const API_URL = 'http://localhost:1337';

const ApiContext = createContext(undefined);
const ApiDispatchContext = createContext(undefined);

function ApiCall({children}) {
  const setApi = useContext(ApiDispatchContext);

  useEffect(() => {
    axios.get(`${API_URL}/flashcards`).then(response => {
      setApi(response.data);
    });
  }, []);

  return <>{children}</>
}

function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  return (
    <ApiContext.Provider value={apiData}>
      <ApiDispatchContext.Provider value={setApiData}>
        <ApiCall>
          {apiData.length ? children : 'Loading'}
        </ApiCall>
      </ApiDispatchContext.Provider>
    </ApiContext.Provider>
  );
}

export { ApiProvider, ApiContext, ApiDispatchContext };