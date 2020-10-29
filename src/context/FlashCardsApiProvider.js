import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';
import LoginLoading from "../components/LoginLoading/LoginLoading";
import { useLocation } from "react-router-dom";
import { useIsPublicRoute } from "../hooks/usePublicRoutes";
import { useUserJwt } from "../hooks/useUser";
import { API_URL } from "../const/api";

const FlashCardsApiContext = createContext(undefined);
const FlashCardsApiDispatchContext = createContext(undefined);

function ApiCall({children}) {
  const setFlashCards = useContext(FlashCardsApiDispatchContext);
  const jwt = useUserJwt();

  useEffect(() => {
    if (jwt) {
      axios.get(`${API_URL}/flashcards`).then(response => {
        setFlashCards(response.data);
      });
    }
  }, [setFlashCards, jwt]);

  return <>{children}</>
}

function FlashCardsApiProvider({ children }) {
  const [flashCards, setFlashCards] = useState([]);
  const location = useLocation();
  const isPublicRoute = useIsPublicRoute(location.pathname);

  return (
    <FlashCardsApiContext.Provider value={flashCards}>
      <FlashCardsApiDispatchContext.Provider value={setFlashCards}>
        <ApiCall>
          {flashCards.length || isPublicRoute ? children : <LoginLoading title="FlashCards" />}
        </ApiCall>
      </FlashCardsApiDispatchContext.Provider>
    </FlashCardsApiContext.Provider>
  );
}

export { FlashCardsApiProvider, FlashCardsApiContext, FlashCardsApiDispatchContext };