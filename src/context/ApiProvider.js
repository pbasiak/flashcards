import React from "react";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "./AppProvider";
import { AuthApiProvider } from "./AuthProvider";
import { DecksApiProvider } from "./DecksApiProvider";
import { FlashCardsApiProvider } from "./FlashCardsApiProvider";
import { TagsApiProvider } from "./TagsApiProvider";

function ApiProvider({ children }) {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export { ApiProvider };