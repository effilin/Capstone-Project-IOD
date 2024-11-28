'use client'
import Spotify from "./mainPage/Spotify"
import { useContext } from "react";
import { ThemeContext } from "../context";
import '../globals.css'


export default function Footer() {

    return (
        
        <div className="footer card main-card d-flex flex-row justify-content-around ">
            <div className="foot1 ">
              <Spotify />
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                   <h6>Thank you for visiting puzzled</h6>
                   <p>&#128151;</p>
                </div>
                <div className="d-flex flex-row">
                    <p>connect with me:</p>
                    <a href="https://www.linkedin.com/in/eva-nummer-20651674/"><img src="/images/Linkedin.png" className="float-end align-self-baseline logo" alt="LinkedIn logo"/></a>
                    <a href="https://github.com/effilin"><img src="/images/github.png" className="float-end align-self-baseline logo" alt="Github logo"/></a>
                    <img src="/images/logo.png" className="float-end align-self-baseline logo-me" alt="Cactus logo for Eva Nummer"/>
                </div>
            </div>
        </div>
        
    )
}