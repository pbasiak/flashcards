import { useContext } from 'react';
import { AuthApiContext } from "../context/AuthProvider";
import { useDecks } from './useDecks';
import { useFlashCards } from './useFlashCards';

function useUser() {
    const user = useContext(AuthApiContext);

    return user.auth.user;
};

function useUserJwt() {
    const user = useContext(AuthApiContext);

    return user?.auth?.jwt;
}

function useUserLike(type, id) {
    const { decks } = useDecks();
    const { flashCards } = useFlashCards();
    const user = useUser();
    let array = type === 'deck' ? decks : flashCards;
    // const isUserInArray = array.filter(item => item.id.toString() === id.toString()).map(item => item.users)[0].find(users => users.id === user.id);

    // if (isUserInArray) {
    //     return true;
    // }

    return false;
}

export { useUser, useUserJwt, useUserLike }
