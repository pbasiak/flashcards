import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Dashboard from "./pages/Dashboard/Dashboard";
import Decks from "./pages/Decks/Decks";
import DeckDetails from "./pages/DeckDetails/DeckDetails";

import { ApiProvider } from "./context/ApiProvider";
import Tag from "./pages/Tag/Tag";
import GithubAuth from "./auth/GithubAuth";
import Login from "./components/Login/Login";
import FlashCards from "./pages/FlashCards/FlashCards";
import FlashCard from "./pages/FlashCard/FlashCard";
import AddFlashCard from "./components/FlashCards/AddFlashCard";
import ROUTES from "./const/routes";
import EditFlashCard from "./components/FlashCards/EditFlashCard";
import Contact from "./pages/Contact/Contact";
import DeckFlashCard from "./pages/DeckFlashCard/DeckFlashCard";
import AddDeck from "./pages/AddDeck/AddDeck";
import EditDeck from "./pages/EditDeck/EditDeck";
import Home from "./pages/Home/Home";
import MyDecks from "./pages/MyDecks/MyDecks";
import MyFlashCards from "./pages/MyFlashCards/MyFlashCards";

function App() {
  if (!process.env.REACT_APP_BACKEND_URL) {
    return <p>API URL not set.</p>;
  }

  if (process?.env?.NODE_ENV === "production") {
    console.log("GA Initialized");
    ReactGA.initialize("UA-131750234-3");
  }

  return (
    <Router>
      <ApiProvider>
        <Switch>
          <Route
            path={ROUTES.GithubCallback.path}
            component={GithubAuth}
            exact
          />
          <Route path={ROUTES.Login.path} component={Login} exact />
          <Route path={ROUTES.AddDeck.path} component={AddDeck} exact />
          <Route path={ROUTES.EditDeck.path} component={EditDeck} exact />
          <Route
            path={ROUTES.AddFlashCard.path}
            component={AddFlashCard}
            exact
          />
          <Route
            path={ROUTES.EditFlashCard.path}
            component={EditFlashCard}
            exact
          />
          <Route
            path={ROUTES.MyFlashCards.path}
            component={MyFlashCards}
            exact
          />
          <Route path={ROUTES.FlashCard.path} component={FlashCard} exact />
          <Route path={ROUTES.MyDecks.path} component={MyDecks} exact />
          <Route path={ROUTES.Decks.path} component={Decks} exact />
          <Route
            path={ROUTES.DeckFlashCard.path}
            component={DeckFlashCard}
            exact
          />
          <Route path={ROUTES.FlashCards.path} component={FlashCards} exact />
          <Route path={ROUTES.Deck.path} component={DeckDetails} exact />
          <Route path={ROUTES.Tag.path} component={Tag} exact />
          <Route path={ROUTES.Dashboard.path} component={Dashboard} exact />
          <Route path={ROUTES.Contact.path} component={Contact} exact />
          <Route path={ROUTES.Home.path} component={Home} exact />
        </Switch>
      </ApiProvider>
    </Router>
  );
}

export default App;
