import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './pages/Card/Card';
import Home from './pages/Home/Home';
import Decks from './pages/Decks/Decks';
import DeckDetails from './pages/DeckDetails/DeckDetails';

import { ApiProvider } from './context/ApiProvider';
import Tag from './pages/Tag/Tag';
import GithubAuth from './auth/GithubAuth';
import Login from './components/Login/Login';
import FlashCards from './pages/FlashCards/FlashCards';

function App() {
    if (!process.env.REACT_APP_BACKEND_URL) {
        return <p>
            Please specify your backend url with the <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/" target="_blank" rel="noopener noreferrer">environment variable</a>:<br />
            <b>REACT_APP_BACKEND_URL</b>.<br />
            <br />
            For example launch this app with:<br />
            <b>REACT_APP_BACKEND_URL=http://localhost:1337 yarn start</b>
        </p>;
    }

    return (
        <Router>
            <ApiProvider>
                <Switch>
                    <Route path="/auth/github/callback" exact component={GithubAuth} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/card/:id" exact>
                        <Card />
                    </Route>
                    <Route path="/decks" exact>
                        <Decks />
                    </Route>
                    <Route path="/flashcards" exact>
                        <FlashCards />
                    </Route>
                    <Route path="/deck/:id" exact>
                        <DeckDetails />
                    </Route>
                    <Route path="/tag/:name" exact>
                        <Tag />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ApiProvider>
        </Router>
    );
}

export default App;
