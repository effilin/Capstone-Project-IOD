'use client'
import './globals.css';
import Welcome from "./_components/mainPage/welcome";
import { useEffect, useState } from 'react';


export default function Home() {

  const [starsPresent, setStar] = useState('false')

  useEffect(() => {

    const stars = () => {
      
      let numStars = 0;

      while(numStars <= 1000) {
      const locationX = Math.round(Math.random() * 100);
      const locationY = Math.round(Math.random() * 100);
      const star = document.createElement('div');
      const canvas = document.querySelector('body');
      star.classList.add('star');
      star.style.setProperty("--index", numStars);
      star.style.setProperty("top", `${locationY}%`);
      star.style.setProperty("left", `${locationX}%`);
      canvas.appendChild(star);
      numStars ++;
    }
    setStar('true')
  }

  stars()

  },[starsPresent])


 


  return (
    <main className='star-box'>
      <div className="main-body">
          <div className="main-card card d-flex flex-row justify-content-around flex-wrap p-3">
            <div className='border-bottom welcome-div'>
              <Welcome />
            </div>

            <div>
              <h2 className="text welcome-div">About</h2>
              <h5>Thank you for checking out Puzzled! Sign in for weather and stats. 
                The only information needed to create an account is a username and zip code.
                The zip code is for weather updates.
                Puzzled is easy to play! Just click the cards to form word until you solve the puzzle. </h5>
              <h5>Please send feedback or suggestions through the feedback link in the dashboard! I appreciate your advice and feedback!</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
