export const BASE_URL = "/app";

const ROUTES = {
  Home: {
    name: "Home",
    path: "/",
    public: true,
  },
  Dashboard: {
    name: "Dashboard",
    path: `${BASE_URL}/dashboard`,
    public: false,
  },
  Contact: {
    name: "Contact",
    path: `${BASE_URL}/contact`,
    public: false,
  },
  GithubAuth: {
    name: "GithubAuth",
    path: "/auth/github/callback",
    public: true,
  },
  Login: {
    name: "Login",
    path: `${BASE_URL}/login`,
    public: true,
  },
  Logout: {
    name: "Logout",
    path: `${BASE_URL}/logout`,
    public: true,
  },
  GithubCallback: {
    name: "GithubCallback",
    path: "/auth/github/callback",
    public: true,
  },
  FlashCards: {
    name: "FlashCards",
    path: `${BASE_URL}/flashcards`,
    public: false,
  },
  FlashCard: {
    name: "FlashCard",
    path: `${BASE_URL}/flashcards/:flashCardId`,
    public: false,
  },
  AddFlashCard: {
    name: "Add FlashCards",
    path: `${BASE_URL}/flashcards/add`,
    public: false,
  },
  EditFlashCard: {
    name: "Edit FlashCards",
    path: `${BASE_URL}/flashcards/:flashCardId/edit`,
    public: false,
  },
  Decks: {
    name: "Decks",
    path: `${BASE_URL}/decks`,
    public: false,
  },
  Deck: {
    name: "Deck",
    path: `${BASE_URL}/decks/:deckId`,
    public: false,
  },
  DeckFlashCard: {
    name: "Deck",
    path: `${BASE_URL}/decks/:deckId/:flashCardId`,
    public: false,
  },
  EditDeck: {
    name: "Edit Deck",
    path: `${BASE_URL}/decks/:deckId/edit`,
    public: false,
  },
  AddDeck: {
    name: "Add Deck",
    path: `${BASE_URL}/decks/add`,
    public: false,
  },
  TagBase: {
    name: "TagBase",
    path: `${BASE_URL}/tag`,
    public: false,
  },
  Tag: {
    name: "Tag",
    path: `${BASE_URL}/tag/:name`,
    public: false,
  },
  MyDecks: {
    name: "My Decks",
    path: `${BASE_URL}/decks/my`,
    public: false,
  },
  MyFlashCards: {
    name: "My FlashCardS",
    path: `${BASE_URL}/flashcards/my`,
    public: false,
  },
};

export default ROUTES;
