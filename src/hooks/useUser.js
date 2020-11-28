import { useContext } from 'react';
import { AuthApiContext } from "../context/AuthProvider";

function useUser() {
    const { auth: { user, jwt } } = useContext(AuthApiContext);

    return { user, jwt };
};

export { useUser }
