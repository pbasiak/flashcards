import React from "react";
import { CookiesProvider } from "react-cookie";
import { AuthApiProvider } from "./AuthProvider";
import { DecksApiProvider } from "./DecksApiProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";
import { TagsApiProvider } from "./TagsApiProvider";

function ApiProvider({ children }) {
  return (
    <FlashCardsApiProvider>
      <DecksApiProvider>
        <TagsApiProvider>
          <CookiesProvider>
            <AuthApiProvider>
              {children}
            </AuthApiProvider>
          </CookiesProvider>
        </TagsApiProvider>
      </DecksApiProvider>
    </FlashCardsApiProvider>
  );
}

export { ApiProvider };