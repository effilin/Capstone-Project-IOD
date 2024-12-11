'use client'
import Spotify from "./mainPage/Spotify"
import { useEffect, useState, useContext } from "react";
import { HelpfulContext } from "../context";
import '../globals.css'
import '../../styles/responsive.css'
import Image from "next/image";


export default function Footer() {

    const [starsPresent, setStar] = useState(false);
    const {helpfulMessage, setHelpfulMessage} = useContext(HelpfulContext);

    useEffect(() => {

        const stars = () => {
          
          let numStars = 0;
    
          while(numStars <= 500) {
          const locationX = Math.round(Math.random() * 100);
          const locationY = Math.round(Math.random() * 100);
          const star = document.createElement('div');
          const canvas = document.querySelector('.star-box-footer');
          star.classList.add('star');
          star.style.setProperty("--index", numStars);
          star.style.setProperty("top", `${locationY}%`);
          star.style.setProperty("left", `${locationX}%`);
          canvas.appendChild(star);
          numStars ++;
        }}
    
        if( starsPresent === true) {
          
          const parent = document.querySelector('.star-box-footer')
          const children = document.querySelectorAll(".star")
          children.forEach((child) => parent.removeChild(child))
          setStar(false);
        } else {
        setStar(true)
        stars()
        }
      },[])

    return (
      <div className="star-box-footer d-flex justify-content-center">
        <div className="footer card main-card d-flex flex-row flex-wrap">
            <div className="foot1 m-1">
              <Spotify />
            </div>
            <div className="d-flex flex-column justify-content-between">
              
                  <div className="footer-card card main-card align-self-start p-2">
                    <h4 className="text">Helpful Hints: </h4>
                      <h5>{helpfulMessage.message? helpfulMessage.message: `Hello! \u{1F44B}`}</h5>
                   
                  </div>
                  <div className="thanks-text d-flex flex-column ">
                    <div className="d-flex flex-row">
                       <h6 className="text2">Thank you for visiting puzzled</h6>
                       <p className="mx-2">&#128151;</p>
                    </div>
                    <div className="d-flex flex-row ">
                        <h6 className="text2">Connect with me:</h6>
                        <a href="https://www.linkedin.com/in/eva-nummer-20651674/"><img src="/images/Linkedin.png" className="float-end align-self-baseline logo mx-2" alt="LinkedIn logo"/></a>
                        <a href="https://github.com/effilin"><img src="/images/github.png" className="float-end align-self-baseline logo mx-2" alt="Github logo"/></a>
                    </div>
                  </div>
            </div>
            <img src="/images/logo.png" className="float-end logo-me align-self-end" alt="Cactus logo for Eva Nummer" />
        </div>
      </div>
        
    )
}