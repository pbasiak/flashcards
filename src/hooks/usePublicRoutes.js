import ROUTES from '../const/routes';

export function usePublicRoutes() {
    const publicRoutes = Object.values(ROUTES).map(item => item.public === true && item.path).filter(item => item !== false);

    return publicRoutes;
};

