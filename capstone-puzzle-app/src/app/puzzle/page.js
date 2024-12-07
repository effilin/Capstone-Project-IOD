'use client'
import PuzzleCards from "@/app/components/puzzle/puzzleCards";
import '../globals.css';
import { useEffect, useState, useContext } from "react";
import { PuzzleContext, UserContext } from "../context";

export default function PuzzlePage() {

    const [starsPresent, setStar] = useState(false);
    const {puzzleInfo, setPuzzleInfo} = useContext(PuzzleContext);
    const {currentUser, setCurrentUser} = useContext(UserContext);
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

      useEffect(() => {

        let number = currentUser.puzzleStat? currentUser.puzzleStat: 1;
        console.log(`puzzle context #: ${number}`)

        const fetchData = async() => {
                try {
            const res= await fetch(`/api/puzzles?number=${encodeURIComponent(number)}`, {
                    method: 'GET',
                });
    
                if(res.ok) {
                    const puzzleResult = await res.json();
                    console.log(`puzzle fetched ${puzzleResult.riddle}`)
                    setPuzzleInfo({riddle: puzzleResult.riddle, answer: puzzleResult.answer, count:puzzleResult.count, number: number} )
                } else {
                    const errorMessage = await res.json();
                    console.log('error', errorMessage)
                }
            } catch (error) {
                console.log('OH NO, DID NOT GET IT', error)
            }
       };
       fetchData();
       
    }, [currentUser.puzzleStat]);

  useEffect(() => {
    console.log("Updated Puzzle Info:", puzzleInfo);
}, [puzzleInfo]);
    
    



    /*

      useEffect(() =>{
        setShuffle(true)
        setTimeout(() => setShuffle(false), 2000)
        console.log( `shuffled ${shuffle}`)

      },[puzzleNumber])
      */
      
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