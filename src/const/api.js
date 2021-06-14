export const API_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:1337";

export const API_ROUTES = {
  FlashCards: {
    path: '/flashcards'
  },
  Decks: {
    path: '/decks',
  }
}
