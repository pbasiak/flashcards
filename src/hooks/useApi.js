import React, { useContext } from 'react';
import { ApiContext, ApiDispatchContext } from '../store';

export function useApi() {
    const apiContext = useContext(ApiContext);

    return apiContext;
};

export function useSetApi(data) {
    const setApiContext = useContext(ApiDispatchContext);

    return setApiContext(data);
}
