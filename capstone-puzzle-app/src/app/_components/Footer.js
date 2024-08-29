'use client'
import Spotify from "./mainPage/Spotify"
import { useContext } from "react";
import { ThemeContext } from "../context";
import '../globals.css'


export default function Footer() {

    return (
        <div className="container text-center footer">
            <div className="row-sm-12">
                <div className=" col-12 col-sm-12 col-md-12 col-lg-5 ">
                  <Spotify />
                </div>
                <div className="col-sm-2">
                  
                </div>
            </div>
        </div>
    )
}