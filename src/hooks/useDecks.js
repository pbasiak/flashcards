import { useRequest } from "./useRequest";
import qs from "qs";
import ROUTES from "../const/routes";
import { useUser } from "./useUser";

function useDecks({ name, tag, limit, start, title, id } = {}) {
  const query = qs.stringify({
    title: name,
    "tags.name": tag,
    _limit: limit,
    _start: start,
    title_contains: title,
    id: id,
  });

  const {
    data: decks = [],
    loading: isDecksLoading,
    error: isDecksError,
    refetch: refetchDecks,
  } = useRequest(`${ROUTES.Decks.path}/?${query}`);
  const {
    data: decksCount = null,
    loading: isDecksCountLoading,
    error: decksCountError,
    refetch: refetchDecksCount,
  } = useRequest(`${ROUTES.Decks.path}/count?${query}`);

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
  } = useRequest("/decks/count");

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
  } = useRequest(`/decks/${id}`);

  return {
    deck,
    isDeckLoading,
    isDeckError,
    refetchDeck,
  };
}

function useAddDeck({ deck }) {
  const { data, refetch } = useRequest(
    ROUTES.Decks.path,
    {
      method: "post",
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
    `${ROUTES.Decks.path}/${id}`,
    {
      method: "delete",
    },
    true
  );

  return { deleteDeckData, executeDeleteDeck };
}

function useEditDeck({ deck, id }) {
  const { data: editDeckData, refetch: executeEditDeck } = useRequest(
    `${ROUTES.Decks.path}/${id}`,
    {
      method: "put",
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
