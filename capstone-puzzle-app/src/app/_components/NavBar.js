'use client'
import Link from "next/link";
import { useEffect } from "react";
import '../globals.css';
import { useContext } from "react";
import { ThemeContext } from "../context";

export default function NavBar() {

    const {theme, changeTheme} = useContext(ThemeContext);


    return (
        <div className="container nav-container shadow ">
            <div className="row navbar"> 
                <div className="col-2">
                    <button className="btn dropdown-toggle menu position-absolute top-0 start-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                        <ul className="dropdown-menu position-relative">
                            <li><Link className="dropdown-item" href="/">Home</Link></li>
                            <li><Link className="dropdown-item" href="/dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" href="/puzzle">Puzzle</Link></li>
                        </ul>
                </div>

                <div className="col-8">
                    <h1>Puzzled</h1>
                </div>
            </div>

        </div>
    )
}

