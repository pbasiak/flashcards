import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';
import LoginLoading from "../components/LoginLoading/LoginLoading";
import { useLocation } from "react-router-dom";
import { useIsPublicRoute } from "../hooks/usePublicRoutes";
import { useUserJwt } from "../hooks/useUser";
import { API_URL } from "../const/api";

const TagsApiContext = createContext(undefined);
const TagsApiDispatchContext = createContext(undefined);

function ApiCall({children}) {
  const setTags = useContext(TagsApiDispatchContext);
  const jwt = useUserJwt();

  useEffect(() => {
    if (jwt) {
      axios.get(`${API_URL}/tags`, {
        headers: {
            Authorization:
                `Bearer ${jwt}`,
        },
    }).then(response => {
        setTags(response.data);
      });
    }
  }, [setTags, jwt]);

  return <>{children}</>
}

function TagsApiProvider({ children }) {
  const [tags, setTags] = useState([]);
  const location = useLocation();
  const isPublicRoute = useIsPublicRoute(location.pathname);

  return (
    <TagsApiContext.Provider value={tags}>
      <TagsApiDispatchContext.Provider value={setTags}>
        <ApiCall>
          {tags.length || isPublicRoute ? children : <LoginLoading title="Tags" />}
        </ApiCall>
      </TagsApiDispatchContext.Provider>
    </TagsApiContext.Provider>
  );
}

export { TagsApiProvider, TagsApiContext, TagsApiDispatchContext };