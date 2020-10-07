import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function useQuery(search) {
    return new URLSearchParams(search);
}

function GithubAuth() {
    const [, setCookie] = useCookies(['auth']);
    const location = useLocation();
    const { search } = location;
    const history = useHistory();
    let query = useQuery(search);
    useEffect(() => {
        if (!location) {
            return;
        }

        axios({
            method: "GET",
            url: `http://localhost:1337/auth/github/callback${search}`,
        })
            .then(res => res.data)
            .then(res => {
                setCookie('auth', res, { path: '/' });
                history.push('/');
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    }, [location, history, setCookie, search]);

    const error = query.get('error');

    return (
        <div>
            Login... <Link to="/">Back..</Link>

            {error && <h2>{error}</h2>}
        </div>
    )
}

export default GithubAuth;
