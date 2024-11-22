'use client'
import Spotify from "./mainPage/Spotify"
import { useContext } from "react";
import { ThemeContext } from "../context";
import '../globals.css'


export default function Footer() {

    return (
        <div className="container text-center footer">
            <div className="row-sm-12 d-flex flex-row justify-content-around">
                <div className=" ">
                  <Spotify />
                </div>
                <div className="align-self-baseline">
                    <img src="logo.png" className="float-end" alt="Cactus logo for Eva Nummer"></img>
                </div>
            </div>
        </div>
    )
}