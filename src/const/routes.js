const ROUTES = {
    Home: {
        name: 'Home',
        path: '/',
        public: false,
    },
    GithubAuth: {
        name: 'GithubAuth',
        path: '/auth/github/callback',
        public: true,
    },
    Login: {
        name: 'Login',
        path: '/login',
        public: true,
    },
};

export default ROUTES;
