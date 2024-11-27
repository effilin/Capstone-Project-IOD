'use client'

import '../styles/not-found.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
 
export default function NotFoundPage() {

  const [end, setEnd] = useState('paused')
  const router = useRouter();

  useEffect (() => {
    const letters1 = document.querySelectorAll(".page");
    const letters2 = document.querySelectorAll(".not");
    const letters3 = document.querySelectorAll(".found");

    const indexes1 = letters1.length;
    const indexes2 = letters1.length;
    const indexes3 = letters1.length;
    
  letters1.forEach((letter, index) => {
      const reverse = indexes1-index;
      letter.style.setProperty("--index", reverse) 
      console.log (`${letter} is index ${reverse}`)
  })

  letters2.forEach((letter, index) => {
    const reverse = indexes2-index;
    letter.style.setProperty("--index", reverse) 
    console.log (`${letter} is index ${reverse}`)
  });

  letters3.forEach((letter, index) => {
    const reverse = indexes3-index;
    letter.style.setProperty("--index", reverse) 
    console.log (`${letter} is index ${reverse}`)
  });
  }, []);

useEffect (() => {

  function startAnimation() {
    const letters1 = document.querySelectorAll(".page");
    const letters2 = document.querySelectorAll(".not");
    const letters3 = document.querySelectorAll(".found");

    letters1.forEach((letter) => {
      letter.style.setProperty("animation-play-state", "running") 
      console.log (`${letter} is running`)
  })

  letters2.forEach((letter) => {
    letter.style.setProperty("animation-play-state", "running") 
    console.log (`${letter} is running`)
  });

  letters3.forEach((letter) => {
    letter.style.setProperty("animation-play-state", "running") 
    console.log (`${letter} is running`)
  });
  }
  function delayedAnimation() {
    setTimeout(startAnimation, 3*1000)
  }

  delayedAnimation()

},[]);

useEffect(() => {
   
  function endAnimation() {

    const background = document.querySelector(".galaxy");
    background.style.setProperty("animation-play-state", end) 
  }
  endAnimation();

},[end]);

function handleClick(e) {
  e.preventDefault();
  setEnd('running');
  setTimeout(() => {router.push('/')}, 3*1000 );
}
 
  
  return (
    <div className='galaxy d-flex justify-content-around'>
      <div className='animation-background'>
          <div className='text-box d-flex flex-row justify-content-around'>
            <div className='d-flex flex-row'>
              <div className='d-flex flex-row m-2 word1'>
                <span className='not-found-text page'>P</span>
                <span className='not-found-text page'>A</span>
                <span className='not-found-text page'>G</span>
                <span className='not-found-text page'>E</span>
              </div>
              <div className='d-flex flex-row m-2 word2'>
                <span className='not-found-text not'>N</span>
                <span className='not-found-text not'>O</span>
                <span className='not-found-text not'>T</span>
              </div>
              <div className='d-flex flex-row m-2 word3'>
                <span className='not-found-text found'>F</span>
                <span className='not-found-text found'>O</span>
                <span className='not-found-text found'>U</span>
                <span className='not-found-text found'>N</span>
                <span className='not-found-text found'>D</span>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-outline-danger home-button' role='button' onClick={handleClick}>Return Home</button>
            </div>
          </div>
          
            <div className='l1'></div>
            <div className='l2'></div>
            <div className='l3'></div>
            <div className='l4'></div>
            <div className='l5'></div>
            <div className='l6'></div>
            <div className='l7'></div>
            <div className='l8'></div>
      </div>
      <img src="/images/logo.png" className="float-end align-self-baseline logo" alt="Cactus logo for Eva Nummer"/>
    </div>
  )
}