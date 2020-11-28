import { useContext } from 'react';
import { AuthApiContext } from "../context/AuthProvider";

function useUser() {
    const user = useContext(AuthApiContext);

    return user.auth.user;
};

function useUserJwt() {
    const user = useContext(AuthApiContext);

    return user?.auth?.jwt;
}

export { useUser, useUserJwt }
