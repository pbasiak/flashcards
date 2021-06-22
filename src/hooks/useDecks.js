import { useRequest } from "./useRequest";
import qs from "qs";
import { useUser } from "./useUser";
import { API_ROUTES } from "../const/api";
import { DELETE, POST, PUT } from "../const/http";

function useDecks({ name, tag, limit, start, title, id, status, level } = {}) {
  const query = qs.stringify({
    title: name,
    "tags.name": tag,
    _limit: limit,
    _start: start,
    title_contains: title,
    id: id,
    status: status,
    level,
  });

  const {
    data: decks = [],
    loading: isDecksLoading,
    error: isDecksError,
    refetch: refetchDecks,
  } = useRequest(`${API_ROUTES.Decks.path}/?${query}`);
  const {
    data: decksCount = null,
    loading: isDecksCountLoading,
    error: decksCountError,
    refetch: refetchDecksCount,
  } = useRequest(`${API_ROUTES.Decks.path}/count?${query}`);

  return {
    decks,
    isDecksLoading,
    isDecksError,
    refetchDecks,
    decksCount,
    isDecksCountLoading,
    decksCountError,
    refetchDecksCount,
  };
}

function useDeckAuthor({ deck }) {
  const { user } = useUser();

  let isAuthor = false;

  if (user?.id === deck?.author?.id) {
    isAuthor = true;
  }

  return { isAuthor };
}

function useDecksCount() {
  const {
    data: decksCount,
    loading: isDeckCountLoading,
    error: decksCountError,
    refetch: refetchDecksCount,
  } = useRequest(`${API_ROUTES.Decks.path}/count`);

  return {
    decksCount,
    isDeckCountLoading,
    decksCountError,
    refetchDecksCount,
  };
}

function useDeck({ id }) {
  const {
    data: deck = {},
    loading: isDeckLoading,
    error: isDeckError,
    refetch: refetchDeck,
  } = useRequest(`${API_ROUTES.Decks.path}/${id}`);

  return {
    deck,
    isDeckLoading,
    isDeckError,
    refetchDeck,
  };
}

function useAddDeck({ deck }) {
  const { data, refetch } = useRequest(
    API_ROUTES.Decks.path,
    {
      method: POST,
      data: {
        ...deck,
      },
    },
    true
  );

  return { data, refetch };
}

function useDeleteDeck({ id }) {
  const { data: deleteDeckData, refetch: executeDeleteDeck } = useRequest(
    `${API_ROUTES.Decks.path}/${id}`,
    {
      method: DELETE,
    },
    true
  );

  return { deleteDeckData, executeDeleteDeck };
}

function useEditDeck({ deck, id }) {
  const { data: editDeckData, refetch: executeEditDeck } = useRequest(
    `${API_ROUTES.Decks.path}/${id}`,
    {
      method: PUT,
      data: {
        ...deck,
      },
    },
    true
  );

  return { editDeckData, executeEditDeck };
}

export {
  useDecks,
  useDecksCount,
  useDeckAuthor,
  useDeck,
  useAddDeck,
  useDeleteDeck,
  useEditDeck,
};
