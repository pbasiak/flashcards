import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
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

function App() {
  if (!process.env.REACT_APP_BACKEND_URL) {
    return (
      <p>
        Please specify your backend url with the{" "}
        <a
          href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
          target="_blank"
          rel="noopener noreferrer"
        >
          environment variable
        </a>
        :<br />
        <b>REACT_APP_BACKEND_URL</b>.<br />
        <br />
        For example launch this app with:
        <br />
        <b>REACT_APP_BACKEND_URL=http://localhost:1337 yarn start</b>
      </p>
    );
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
          <Route path={ROUTES.FlashCard.path} component={FlashCard} exact />
          <Route path={ROUTES.Decks.path} component={Decks} exact />
          <Route path={ROUTES.FlashCards.path} component={FlashCards} exact />
          <Route path={ROUTES.Deck.path} component={DeckDetails} exact />
          <Route path={ROUTES.Tag.path} component={Tag} exact />
          <Route path={ROUTES.Home.path} component={Home} exact />
        </Switch>
      </ApiProvider>
    </Router>
  );
}

export default App;
