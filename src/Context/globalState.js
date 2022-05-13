import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// initial State
const initialState = {
  user: JSON.parse(localStorage.getItem("token")) || "",
};

// Create context
export const GlobalState = createContext(AppReducer);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.user));
  }, [state, AppReducer]);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  return (
    <GlobalState.Provider
      value={{
        user: state.user,
        setUser,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
