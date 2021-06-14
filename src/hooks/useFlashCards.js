import { useRequest } from "./useRequest";
import qs from "qs";
import ROUTES from "../const/routes";
import { useUser } from "./useUser";
import { API_ROUTES } from "../const/api";
import { DELETE, POST, PUT } from "../const/http";

function useFlashCards({
  name,
  tag,
  deckId,
  limit,
  start,
  title,
  sort = "created_at:DESC",
} = {}) {
  const query = qs.stringify({
    Title: name,
    "tags.name": tag,
    "decks.id": deckId,
    _limit: limit,
    _start: start,
    title_contains: title,
    _sort: sort,
  });

  const {
    data: flashCards = [],
    loading: isFlashCardsLoading,
    error: isFlashCardsError,
    refetch: refetchFlashCards,
  } = useRequest(`${API_ROUTES.FlashCards.path}?${query}`);
  const {
    data: flashCardsCount = null,
    loading: isFlashCardsCountLoading,
    error: flashCardsCountError,
    refetch: refetchFlashCardsCount,
  } = useRequest(`${API_ROUTES.FlashCards.path}/count?${query}`);

  return {
    flashCards,
    isFlashCardsLoading,
    isFlashCardsError,
    refetchFlashCards,
    flashCardsCount,
    isFlashCardsCountLoading,
    flashCardsCountError,
    refetchFlashCardsCount,
  };
}

function useFlashCardAuthor() {
  const { user } = useUser();

  const isAuthor = (flashCardAuthorId) => {
    if (user?.id === flashCardAuthorId) {
      return true;
    }

    return false;
  };

  return { isAuthor };
}

function useFlashCardsCount() {
  const {
    data: flashCardsCount,
    loading: isFlashCardsCountLoading,
    error: isFlashCardsCountError,
    refetch: refetchFlashCardsCount,
  } = useRequest(`${API_ROUTES.FlashCards.path}/count`);

  return {
    flashCardsCount,
    isFlashCardsCountLoading,
    isFlashCardsCountError,
    refetchFlashCardsCount,
  };
}

function useFlashCard({ id }) {
  const {
    data: flashCard = {},
    loading: isFlashCardLoading,
    error: isFlashCardError,
    refetch: refetchFlashCard,
  } = useRequest(`${API_ROUTES.FlashCards.path}/${id}`);

  return {
    flashCard,
    isFlashCardLoading,
    isFlashCardError,
    refetchFlashCard,
  };
}

function useAddFlashCard(flashcard) {
  const { data: addFlashCardData, refetch: execute } = useRequest(
    API_ROUTES.FlashCards.path,
    {
      method: POST,
      data: {
        ...flashcard,
      },
    },
    true
  );

  return { addFlashCardData, execute };
}

function useDeleteFlashCard(id) {
  const { data: deleteFlashCardData, refetch: deleteFlashCard } = useRequest(
    `${API_ROUTES.FlashCards.path}/${id}`,
    {
      method: DELETE,
    },
    true
  );

  if (!id) {
    return { deleteFlashCardData: null, deleteFlashCard: null }; // TODO: Is this a proper way to validate function parameter? (ID is required)
  }

  return { deleteFlashCardData, deleteFlashCard };
}

function useEditFlashCard(flashcard, id) {
  const { data: editFlashCardData, refetch: executeEditFlashCard } = useRequest(
    `${API_ROUTES.FlashCards.path}/${id}`,
    {
      method: PUT,
      data: {
        ...flashcard,
      },
    },
    true
  );

  return { editFlashCardData, executeEditFlashCard };
}

export {
  useFlashCards,
  useFlashCardsCount,
  useFlashCard,
  useFlashCardAuthor,
  useAddFlashCard,
  useEditFlashCard,
  useDeleteFlashCard,
};
