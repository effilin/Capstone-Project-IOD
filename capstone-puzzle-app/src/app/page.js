import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <div className="main-body">
        <h1>Welcome</h1>

      </div>
    </main>
  );
}
