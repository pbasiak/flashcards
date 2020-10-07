import React from "react";
import { CookiesProvider } from "react-cookie";
import { AuthApiProvider } from "./AuthProvider";
import { DecksApiProvider } from "./DecksApiProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";
import { TagsApiProvider } from "./TagsApiProvider";

function ApiProvider({ children }) {
  return (
    <AuthApiProvider>
      <FlashCardsApiProvider>
        <DecksApiProvider>
          <TagsApiProvider>
            <CookiesProvider>
              {children}
            </CookiesProvider>
          </TagsApiProvider>
        </DecksApiProvider>
      </FlashCardsApiProvider>
    </AuthApiProvider>
  );
}

export { ApiProvider };