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
    Logout: {
        name: 'Logout',
        path: '/logout',
        public: true,
    },
    GithubCallback: {
        name: 'GithubCallback',
        path: '/auth/github/callback',
        public: true,
    },
};

export default ROUTES;
