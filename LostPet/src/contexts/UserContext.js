import React, { createContext, useReducer } from 'react';
import {initialState, UserReducer} from '../reducers/UserReducer'

export const UserContext = createContext(UserReducer, initialState);

export default ({children}) => {
    const [state, dispatch] = useReducer();


    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}
