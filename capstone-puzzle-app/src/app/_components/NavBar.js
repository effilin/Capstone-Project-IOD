import Link from "next/link";


export default function NavBar() {
    return (
        <div className="container nav-container">
            <div className="row navbar"> 
                <div className="col">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="/">Home</Link></li>
                            <li><Link className="dropdown-item" href="/dashboard">Dashboard</Link></li>
                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                        </ul>
                </div>

                <div className="col">
                    <h1>Puzzler</h1>
                </div>
            </div>

        </div>
    )
}

