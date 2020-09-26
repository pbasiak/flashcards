import React, { useContext } from 'react';
import { TagsApiContext, TagsApiDispatchContext } from '../context/TagsApiProvider';

export function useTags() {
    const tags = useContext(TagsApiContext);

    return tags;
};

export function useSetTags(data) {
    const setTags = useContext(TagsApiDispatchContext);

    return setTags(data);
}
