import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Card from './pages/Card/Card';
import Home from './pages/Home/Home';
import Decks from './pages/Decks/Decks';
import DeckDetails from './pages/DeckDetails/DeckDetails';

import { ApiProvider } from './context/ApiProvider';
import Tag from './pages/Tag/Tag';

const API_URL = 'http://localhost:1337';

function App() {

    return (
        <Router>
            <ApiProvider>
                <Switch>
                    <Route path="/card" exact>
                        <Card />
                    </Route>
                    <Route path="/decks" exact>
                        <Decks />
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
