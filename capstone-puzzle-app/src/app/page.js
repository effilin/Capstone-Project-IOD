import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import Riddle from "./_components/mainPage/Riddle";
import Welcome from "./_components/mainPage/welcome";


export default function Home() {


  return (
    <main>
      <div className="main-body container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Welcome />
          </div>
          <div className="col-md-6 col-sm-12">
            <Riddle />
          </div>
        </div>
      </div>
    </main>
  );
}
