import { API_URL } from '../const/api';
import { useUser } from './useUser';
import useAxios from 'axios-hooks';

function useRequest(endpoint, options = {}, manual = false) {
    const { jwt } = useUser();

    const headers = {
        Authorization:
            `Bearer ${jwt}`,
    };

    const [{ data, loading, error }, refetch] = useAxios({
        url: `${API_URL}${endpoint}`,
        headers,
        ...options
    }, {
        manual: manual,
    });

    return { data, loading, error, refetch };
}

export { useRequest };
