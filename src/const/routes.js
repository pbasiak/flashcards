const ROUTES = {
  Home: {
    name: "Home",
    path: "/",
    public: false,
  },
  Contact: {
    name: "Contact",
    path: "/contact",
    public: true,
  },
  GithubAuth: {
    name: "GithubAuth",
    path: "/auth/github/callback",
    public: true,
  },
  Login: {
    name: "Login",
    path: "/login",
    public: true,
  },
  Logout: {
    name: "Logout",
    path: "/logout",
    public: true,
  },
  GithubCallback: {
    name: "GithubCallback",
    path: "/auth/github/callback",
    public: true,
  },
  FlashCards: {
    name: "FlashCards",
    path: "/flashcards",
    public: false,
  },
  FlashCard: {
    name: "FlashCard",
    path: "/flashcards/:flashCardId",
    public: false,
  },
  AddFlashCard: {
    name: "Add FlashCards",
    path: "/flashcards/add",
    public: false,
  },
  EditFlashCard: {
    name: "Edit FlashCards",
    path: "/flashcards/:flashCardId/edit",
    public: false,
  },
  Decks: {
    name: "Decks",
    path: "/decks",
    public: false,
  },
  Deck: {
    name: "Deck",
    path: "/decks/:deckId",
    public: false,
  },
  DeckFlashCard: {
    name: "Deck",
    path: "/decks/:deckId/:flashCardId",
    public: false,
  },
  EditDeck: {
    name: "Edit Deck",
    path: "/decks/:deckId/edit",
    public: false,
  },
  AddDeck: {
    name: "Add Deck",
    path: "/decks/add",
    public: false,
  },
  Tag: {
    name: "Tag",
    path: "/tag/:name",
    public: false,
  },
};

export default ROUTES;
