'use client'
import Link from "next/link";
import { useEffect } from "react";
import '../globals.css';


export default function NavBar() {

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', "garden-view" )
      }, [])

    return (
        <div className="container nav-container">
            <div className="row navbar"> 
                <div className="col">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="/">Home</Link></li>
                            <li><Link className="dropdown-item" href="/clientSide/dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" href="/clientSide/puzzle">Puzzle</Link></li>
                        </ul>
                </div>

                <div className="col">
                    <h1>Puzzled</h1>
                </div>
            </div>

        </div>
    )
}

