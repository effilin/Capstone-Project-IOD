'use client'
import Spotify from "./mainPage/Spotify"

export default function Footer() {

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                  <Spotify />
                </div>
                <div className="col">
                  Column
                </div>
            </div>
        </div>
    )
}