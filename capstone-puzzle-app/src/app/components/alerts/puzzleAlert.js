import { useState, useEffect} from "react";
import '../../../styles/alerts.css';
import '../../globals.css'

export default function PuzzleAlert({onClose}) {

    const [ballsPresent, setBalls] = useState(false)

    useEffect(()=>{

        const collectStars = () => {
            let numBalls = 0;
        
              while(numBalls <= 500) {
              const locationX = Math.round(Math.random() * 100);
              const locationY = Math.round(Math.random() * 100);
              const bounceSpotX = Math.round(Math.random() * 100);
              const bounceSpotY = Math.round(Math.random() * 100)
              const ball = document.createElement('div');
              const canvas = document.querySelector('.winner-box');
              ball.classList.add('crazy-ball');
              ball.style.setProperty("--index", numBalls);
              ball.style.setProperty('--bounce-spotX', `${bounceSpotX}vw`)
              ball.style.setProperty('--bounce-spotY', `${bounceSpotY}vw`)
              ball.style.setProperty("top", `${locationY}%`);
              ball.style.setProperty("left", `${locationX}%`);
              canvas.appendChild(ball);
              numBalls ++;
            }}
        
            if( ballsPresent === true) {
              console.log("stars out") 
              const parent = document.querySelector('.winner-box')
              const children = document.querySelectorAll(".crazy-ball")
              children.forEach((child) => parent.removeChild(child))
              setBalls(false);
            } else {
            setBalls(true)
            bouncingStars()
        }

    },[])
  

    return (
        <div className="alert-card">
            <div className="alert alert-dismissible alert-box" role="alert">
               <div className="winner-box d-flex justify-content-center align-self-center">
                    <h4 className="text"> Great Job! You won!</h4>
               </div>
               <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>     
    );
}