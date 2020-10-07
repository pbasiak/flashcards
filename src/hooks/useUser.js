import { useContext } from 'react';
import { AuthApiContext } from "../context/AuthProvider";

export function useUser() {
    const user = useContext(AuthApiContext);

    return user.auth.user;
};
