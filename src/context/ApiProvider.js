import React from "react";
import { DecksApiProvider } from "./DecksApiProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";
import { TagsApiProvider } from "./TagsApiProvider";

function ApiProvider({ children }) {
  return (
    <FlashCardsApiProvider>
      <DecksApiProvider>
        <TagsApiProvider>
          {children}
        </TagsApiProvider>
      </DecksApiProvider>
    </FlashCardsApiProvider>
  );
}

export { ApiProvider };