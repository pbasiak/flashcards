import axios from 'axios';

const API_URL = 'http://localhost:1337';

export function fetchFlashCards() {
    const response = axios.get(`${API_URL}/flashcards`);
    return response;
}
