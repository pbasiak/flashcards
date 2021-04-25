import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { CookiesProvider } from "react-cookie";
import { useLocation } from "react-router";
import { AppProvider } from "./AppProvider";
import { AuthApiProvider } from "./AuthProvider";

function ApiProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (process?.env?.NODE_ENV === "production") {
      console.log(location.pathname);

      ReactGA.pageview(location.pathname);
    }
  }, [location]);

  return (
    <AppProvider>
      <CookiesProvider>
        <AuthApiProvider>{children}</AuthApiProvider>
      </CookiesProvider>
    </AppProvider>
  );
}

export { ApiProvider };
