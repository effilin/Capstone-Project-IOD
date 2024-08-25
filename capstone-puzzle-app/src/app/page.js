import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";
import Riddle from "./_components/mainPage/Riddle";
import Welcome from "./_components/mainPage/welcome";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className="main-body container">
        <div className="row">
          <div className="col">
            <Welcome />
          </div>
          <div className="col">
            <Riddle />
          </div>
        </div>

      </div>
    </main>
  );
}
