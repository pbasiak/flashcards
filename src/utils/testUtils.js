import { MemoryRouter } from "react-router-dom";
import { AuthApiProvider } from "../context/AuthProvider";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { USER_ROLE } from "../const/user";

const mockAuthCookie = {
  user: {
    id: 3,
    email: "testemail",
    username: "username",
    role: {
      name: USER_ROLE.AUTHENTICATED,
    },
  },
  jwt: "jwtkey",
};

export const MockAuthApiProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies(["auth"]);
  useEffect(() => {
    setCookies("auth", mockAuthCookie, { path: "/" });
  }, []);

  return cookies?.auth ? (
    <MemoryRouter
      initialEntries={["/one", "/two", { pathname: "/" }]}
      initialIndex={1}
    >
      <AuthApiProvider>{children}</AuthApiProvider>
    </MemoryRouter>
  ) : null;
};
