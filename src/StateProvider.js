import React, { createContext, useContext, useReducer } from "react";
 
// Prepares the dataLayer
export const StateContext = createContext();

// This will wrap our app and provide the dataLayer to every component 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This will allow data to be pulled from the data layer 
export const useStateValue = () => useContext(StateContext);
