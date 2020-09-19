import React, { useCallback, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Card from './pages/Card/Card';
import Home from './pages/Home/Home';
import Decks from './pages/Decks/Decks';
import Deck from './pages/Deck/Deck';
import DeckDetails from './pages/DeckDetails/DeckDetails';
import { fetchFlashCards } from './api/flashCardApi';

import axios from 'axios';
import { ApiContext, ApiProvider } from './context/ApiProvider';

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
                        <Deck />
                    </Route>
                    <Route path="/deck/:id/details" exact>
                        <DeckDetails />
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
