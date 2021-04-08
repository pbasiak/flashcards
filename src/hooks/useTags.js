import { useRequest } from "./useRequest";

export function useTags() {
  const {
    data: tags = [],
    loading: isTagsLoading,
    error: isTagsError,
    refetch: refetchTags,
  } = useRequest("/tags");

  return { tags, isTagsLoading, isTagsError, refetchTags };
}
