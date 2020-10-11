import React, { createContext, useState, useEffect, useContext } from "react";

import axios from 'axios';
import LoginLoading from "../components/LoginLoading/LoginLoading";

const API_URL = 'http://localhost:1337';

const TagsApiContext = createContext(undefined);
const TagsApiDispatchContext = createContext(undefined);

function ApiCall({children}) {
  const setTags = useContext(TagsApiDispatchContext);

  useEffect(() => {
    axios.get(`${API_URL}/tags`).then(response => {
      setTags(response.data);
    });
  }, [setTags]);

  return <>{children}</>
}

function TagsApiProvider({ children }) {
  const [tags, setTags] = useState([]);

  return (
    <TagsApiContext.Provider value={tags}>
      <TagsApiDispatchContext.Provider value={setTags}>
        <ApiCall>
          {tags.length ? children : <LoginLoading />}
        </ApiCall>
      </TagsApiDispatchContext.Provider>
    </TagsApiContext.Provider>
  );
}

export { TagsApiProvider, TagsApiContext, TagsApiDispatchContext };