import { useContext, useState } from "react";
import { store } from "../context/AppProvider";

export function useSidebar() {
  const {
    state: {
      sidebar: { open },
    },
    dispatch,
  } = useContext(store);

  const setOpen = (payload) => dispatch({ type: "set sidebar", payload });

  return { open, setOpen };
}
