 'use client'

import { useState } from "react"
import { UserContext } from "../context";

 export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});


    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}