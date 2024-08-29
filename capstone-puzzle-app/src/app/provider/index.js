 'use client'

import { useState } from "react"
import { UserContext, PuzzleContext } from "../context";

 export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});


    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
}

export const PuzzleProvider = ({children}) => {
    const [puzzleNumber, setPuzzleNumber] = useState({});


    return (
        <PuzzleContext.Provider value={{puzzleNumber, setPuzzleNumber}}>
            {children}
        </PuzzleContext.Provider>
    );
}

