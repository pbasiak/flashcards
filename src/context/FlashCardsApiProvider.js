import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';

const API_URL = 'http://localhost:1337';

const FlashCardsApiContext = createContext(undefined);
const FlashCardsApiDispatchContext = createContext(undefined);

function ApiCall({children}) {
  const setFlashCards = useContext(FlashCardsApiDispatchContext);

  useEffect(() => {
    axios.get(`${API_URL}/flashcards`).then(response => {
      setFlashCards(response.data);
    });
  }, []);

  return <>{children}</>
}

function FlashCardsApiProvider({ children }) {
  const [flashCards, setFlashCards] = useState([]);

  return (
    <FlashCardsApiContext.Provider value={flashCards}>
      <FlashCardsApiDispatchContext.Provider value={setFlashCards}>
        <ApiCall>
          {flashCards.length ? children : 'Loading'}
        </ApiCall>
      </FlashCardsApiDispatchContext.Provider>
    </FlashCardsApiContext.Provider>
  );
}

export { FlashCardsApiProvider, FlashCardsApiContext, FlashCardsApiDispatchContext };