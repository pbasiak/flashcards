import React from "react";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "./AppProvider";
import { AuthApiProvider } from "./AuthProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";
import { TagsApiProvider } from "./TagsApiProvider";

function ApiProvider({ children }) {
  return (
    <AppProvider>
      <CookiesProvider>
        <AuthApiProvider>
          <FlashCardsApiProvider>
              <TagsApiProvider>
                {children}
              </TagsApiProvider>
          </FlashCardsApiProvider>
        </AuthApiProvider>
      </CookiesProvider>
    </AppProvider>
  );
}

export { ApiProvider };