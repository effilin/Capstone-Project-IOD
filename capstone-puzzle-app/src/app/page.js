import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import Riddle from "./_components/mainPage/Riddle";
import Welcome from "./_components/mainPage/welcome";


export default function Home() {


  return (
    <main>
      <div className="main-body container">
        <div className="row d-flex flex-row justify-content-between">
          <div className="">
            <Welcome />
          </div>
          <div className="">
            <Riddle />
          </div>
        </div>
      </div>
    </main>
  );
}
