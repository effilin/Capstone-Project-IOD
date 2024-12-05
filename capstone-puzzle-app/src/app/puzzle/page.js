'use client'
import PuzzleCards from "@/app/components/puzzle/puzzleCards";
import '../globals.css';
import { useEffect, useState } from "react";

export default function PuzzlePage() {

    const [starsPresent, setStar] = useState(false);

    useEffect(() => {

        const stars = () => {
          
          let numStars = 0;
    
          while(numStars <= 1000) {
          const locationX = Math.round(Math.random() * 100);
          const locationY = Math.round(Math.random() * 100);
          const star = document.createElement('div');
          const canvas = document.querySelector('.star-box-puzzle');
          star.classList.add('star');
          star.style.setProperty("--index", numStars);
          star.style.setProperty("top", `${locationY}%`);
          star.style.setProperty("left", `${locationX}%`);
          canvas.appendChild(star);
          numStars ++;
        }}
    
        if( starsPresent === true) {
          console.log("stars out") 
          const parent = document.querySelector('.star-box-puzzle')
          const children = document.querySelectorAll(".star")
          children.forEach((child) => parent.removeChild(child))
          setStar(false);
        } else {
        setStar(true)
        stars()
        }
      
    
      },[])

    return (
        <div className="star-box-puzzle">
            <div className="container text-center">
                <div className="col">
                    <div className="row">
                      <PuzzleCards />
                    </div>
               </div>
            </div>
        </div>
    )
}