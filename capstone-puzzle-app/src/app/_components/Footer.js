'use client'
import Spotify from "./mainPage/Spotify"
import { useEffect, useState } from "react"
import '../globals.css'


export default function Footer() {

    const [starsPresent, setStar] = useState(false);

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
          console.log("stars out") 
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
        <div className="star-box-footer">
            <div className="footer card main-card d-flex flex-row align-items-end justify-content-between">
                <div className="foot1 ">
                  <Spotify />
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-row">
                       <h6 className="text2">Thank you for visiting puzzled</h6>
                       <p className="mx-2">&#128151;</p>
                       
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <h6 className="text2">Connect with me:</h6>
                        <a href="https://www.linkedin.com/in/eva-nummer-20651674/"><img src="/images/Linkedin.png" className="float-end align-self-baseline logo mx-2" alt="LinkedIn logo"/></a>
                        <a href="https://github.com/effilin"><img src="/images/github.png" className="float-end align-self-baseline logo mx-2" alt="Github logo"/></a>
                    </div>
                </div>
                <img src="/images/logo.png" className="float-end logo-me" alt="Cactus logo for Eva Nummer"/>
            </div>
        </div>
        
    )
}