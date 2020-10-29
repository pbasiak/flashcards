import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory, useLocation } from "react-router-dom";
import LoginLoading from "../components/LoginLoading/LoginLoading";
import ROUTES from "../const/routes";
import { useIsPublicRoute } from "../hooks/usePublicRoutes";

const AuthApiContext = createContext(undefined);
const AuthApiDispatchContext = createContext(undefined);

function AuthApiProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [cookies,, removeCookie] = useCookies(['auth']);
  const location = useLocation();
  const history = useHistory();
  const isPublicRoute = useIsPublicRoute(location.pathname);
  const isCallbackUrl = location.pathname === ROUTES.GithubCallback.path;

  useEffect(() => {
    if (cookies.auth) {
      return setAuth(cookies);
    }
  }, [cookies]);

  useEffect(() => {
    if (!isPublicRoute && !cookies.auth && !isCallbackUrl) {
      return history.push(ROUTES.Login.path);
    }
  }, [isPublicRoute, cookies, isCallbackUrl, history]);

  useEffect(() => {
    if (location.pathname === ROUTES.Logout.path) {
      removeCookie('auth', { path: '/' });
      return history.push(ROUTES.Login.path);
    }
  }, [location, removeCookie, history]);

  return (
    <AuthApiContext.Provider value={auth}>
      <AuthApiDispatchContext.Provider value={setAuth}>
        {auth.auth || isPublicRoute ? children : <LoginLoading title="Authorization" />}
      </AuthApiDispatchContext.Provider>
    </AuthApiContext.Provider>
  );
}

export { AuthApiProvider, AuthApiContext, AuthApiDispatchContext };