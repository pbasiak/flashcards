import { Loading } from "carbon-components-react";
import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { usePublicRoutes } from "../hooks/usePublicRoutes";

const AuthApiContext = createContext(undefined);
const AuthApiDispatchContext = createContext(undefined);

function AuthApiProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const location = useLocation();
  const history = useHistory();
  const publicRoutes = usePublicRoutes();
  const isPublicAccess = publicRoutes.includes(location.pathname);

  useEffect(() => {
    if (cookies.auth) {
      return setAuth(cookies);
    }

    if (isPublicAccess) {
      return;
    }

    return history.push('/login');

  }, [history, cookies, isPublicAccess]);

  useEffect(() => {
    if (location.pathname === '/logout') {
      removeCookie('auth');
      return history.push('/login');
    }
  }, [location, removeCookie, history]);

  return (
    <AuthApiContext.Provider value={auth}>
      <AuthApiDispatchContext.Provider value={setAuth}>
        {!cookies ? <Redirect to="/login" /> : auth.auth || isPublicAccess ? children : 'Loading cooookies'}
      </AuthApiDispatchContext.Provider>
    </AuthApiContext.Provider>
  );
}

export { AuthApiProvider, AuthApiContext, AuthApiDispatchContext };