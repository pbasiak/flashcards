import React from "react";
import { DecksApiProvider } from "./DecksApiProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";

function ApiProvider({ children }) {
  return (
    <FlashCardsApiProvider>
      <DecksApiProvider>
        {children}
      </DecksApiProvider>
    </FlashCardsApiProvider>
  );
}

export { ApiProvider };