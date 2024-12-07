'use client'
import './globals.css';
import Welcome from "./components/mainPage/welcome";
import { useEffect, useState, useContext } from 'react';
import { PuzzleContext } from './context';


export default function Home() {

  const [starsPresent, setStar] = useState(false)
  const {puzzleInfo, setPuzzleInfo} = useContext(PuzzleContext);

  useEffect(() => {

    const stars = () => {
      
      let numStars = 0;

      while(numStars <= 600) {
      const locationX = Math.round(Math.random() * 100);
      const locationY = Math.round(Math.random() * 100);
      const star = document.createElement('div');
      const canvas = document.querySelector('.star-box');
      star.classList.add('star');
      star.style.setProperty("--index", numStars);
      star.style.setProperty("top", `${locationY}%`);
      star.style.setProperty("left", `${locationX}%`);
      canvas.appendChild(star);
      numStars ++;
    }}

    if( starsPresent === true) {
      console.log("stars out") 
      const parent = document.querySelector('.star-box')
      const children = document.querySelectorAll(".star")
      children.forEach((child) => parent.removeChild(child))
      setStar(false);
    } else {
    setStar(true)
    stars()
    }

  },[])

  useEffect(()=> {
    const fetchData = async() => {
      try {
        const res= await fetch(`/api/puzzles?number=1`, {
            method: 'GET',
        });

        if(res.ok) {
          const puzzleResult = await res.json();
          console.log(`puzzle fetched ${puzzleResult.riddle}`)
          setPuzzleInfo({riddle: puzzleResult.riddle, answer: puzzleResult.answer, count:puzzleResult.count, number: 1} )
        } else {
          const errorMessage = await res.json();
          console.log('error', errorMessage)
        }
      } catch (error) {
        console.log('OH NO, DID NOT GET IT', error)
      }
    };
    fetchData()
  },[])



  return (
    <main className='star-box'>
      <div className="main-body">
          <div className="main-card card d-flex flex-row justify-content-around flex-wrap p-3">
            <div className='border-bottom welcome-div'>
              <Welcome />
            </div>

            <div>
              <h2 className="text welcome-div">About:</h2>
              <h5 className='text2'>Thank you for checking out Puzzled! Sign in for weather and stats. 
                The only information needed to create an account is a username and zip code.
                The zip code is for weather updates.
                Puzzled is easy to play! Just click the cards to form word until you solve the puzzle. </h5>
              <h5 className='text2'>Please send feedback or suggestions through the feedback link in the dashboard! I appreciate your advice and feedback!</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
