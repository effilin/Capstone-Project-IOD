'use client'
import Spotify from "./mainPage/Spotify"
import { useContext } from "react";
import { ThemeContext } from "../context";
import '../globals.css'


export default function Footer() {

    return (
        <div className="container text-center footer shadow ">
            <div className="row-sm-12 d-flex flex-row justify-content-around ">
                <div className=" ">
                  <Spotify />
                </div>
                <div className="">
                    <img src="/images/logo.png" className="float-end align-self-baseline logo" alt="Cactus logo for Eva Nummer"/>
                </div>
            </div>
        </div>
    )
}