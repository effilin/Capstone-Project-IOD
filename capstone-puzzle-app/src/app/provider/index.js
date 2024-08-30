 'use client'

import { useEffect, useState } from "react"
import { UserContext, PuzzleContext, ThemeContext } from "../context";

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

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("garden-view");

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme)
        }
    }, []);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme)
    }


    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

