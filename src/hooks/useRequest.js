import { API_URL } from '../const/api';
import { useUserJwt } from './useUser';
import useAxios from 'axios-hooks';

function useRequest(endpoint, options = {}) {
    const jwt = useUserJwt();

    const headers = {
        Authorization:
            `Bearer ${jwt}`,
    };

    const [{ data, loading, error }, refetch] = useAxios({
        url: `${API_URL}${endpoint}`,
        headers
    });

    return { data, loading, error, refetch };
}

export { useRequest };
