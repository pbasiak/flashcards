import ROUTES from '../const/routes';
import { useUser } from './useUser';

export function usePublicRoutes() {
    const publicRoutes = Object.values(ROUTES).map(item => item.public === true && item.path).filter(item => item !== false);

    return publicRoutes;
};

export function useIsPublicRoute(pathname) {
    return usePublicRoutes().includes(pathname);
}

export function useIsAllowedToFetch(pathname) {
    const { jwt } = useUser();
    const isPublicRoute = useIsPublicRoute(pathname);

    return jwt && !isPublicRoute ? true : false;
}