import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import Riddle from "./_components/mainPage/Riddle";
import Welcome from "./_components/mainPage/welcome";


export default function Home() {


  return (
    <main>
      <div className="main-body d-flex flex-row justify-content-around ">
          <div className="">
            <Welcome />
          </div>
          <div className="">
            <Riddle />
          </div>
          <div className="main-card card p-3">
            <h2 className="text">About</h2>
            <h5>Thank you for checking out Puzzled! for weather and stats please sign-in or create an account. 
              The only information needed to create an account is a username an zip code.
              The zip code is for weather updates.
              Puzzled is easy to play! Just click the cards to form work words until you solve the puzzle. </h5>
            <h5>Please send feedback or suggestions through the feedback link in the dashboard! I appreciate your advice and feedback!</h5>

          </div>
      </div>
    </main>
  );
}
