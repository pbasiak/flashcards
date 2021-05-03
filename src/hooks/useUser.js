import { useContext } from "react";
import { AuthApiContext } from "../context/AuthProvider";

import { USER_ROLE } from "../const/user";

function useUser() {
  const {
    auth: { user, jwt },
  } = useContext(AuthApiContext);

  const isRoleAuthenticated = user?.role?.name === USER_ROLE.AUTHENTICATED;
  const isRoleAdmin = user?.role?.name === USER_ROLE.ADMIN;
  const isRolePublic = user?.role?.name === USER_ROLE.PUBLIC;

  return { user, jwt, isRoleAdmin, isRoleAuthenticated, isRolePublic };
}

export { useUser };
