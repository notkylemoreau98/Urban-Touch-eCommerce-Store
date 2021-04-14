import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// Wraps the app and prepares the data layer for the entire app
export const StateProvider = ({ reducer, initialState, children}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// This is how information is pulled from data layer
export const useStateValue = () => useContext(StateContext);
