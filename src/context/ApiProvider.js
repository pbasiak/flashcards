import React from "react";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";

function ApiProvider({ children }) {
  return (
    <FlashCardsApiProvider>
      {children}
    </FlashCardsApiProvider>
  );
}

export { ApiProvider };