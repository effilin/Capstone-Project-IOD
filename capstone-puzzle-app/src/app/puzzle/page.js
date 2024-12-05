'use client'
import PuzzleCards from "@/app/components/puzzle/puzzleCards";
import '../globals.css';
import { useEffect, useState, useContext } from "react";
import { PuzzleContext } from "../context";

export default function PuzzlePage() {

    const [starsPresent, setStar] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const {puzzleNumber, setPuzzleNumber} = useContext(PuzzleContext);
    const [shuffle, setShuffle] = useState(false)

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

      useEffect(() =>{
        setShuffle(true)
        setTimeout(() => setShuffle(false), 2000)
        console.log( `shuffled ${shuffle}`)

      },[puzzleNumber])
      
    return (
        <div className="star-box-puzzle">
            <div className="container text-center">
                <div className="col">
                    <div className="row">
                      {shuffle? 
                      <h1 className="text">Loading...</h1>:
                      <PuzzleCards />
                      }
                    </div>
               </div>
            </div>
        </div>
    )
}