import React from "react";
import { CookiesProvider } from "react-cookie";
import { AppProvider } from "./AppProvider";
import { AuthApiProvider } from "./AuthProvider";

function ApiProvider({ children }) {
  console.log('Render ApiProvider');

  return (
    <AppProvider>
      <CookiesProvider>
        <AuthApiProvider>
            {children}
        </AuthApiProvider>
      </CookiesProvider>
    </AppProvider>
  );
}

export { ApiProvider };