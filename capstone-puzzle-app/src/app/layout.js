
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from './_components/BootstrapClient';
import { UserProvider, PuzzleProvider, ThemeProvider } from './provider';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capstone Project Puzzle App",
  description: "this puzzle app contains a daily puzzle, weather, and a riddle",
  author: [{name: 'effie'}]
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <UserProvider>
        <PuzzleProvider>
          <NavBar />
            {children}
          <Footer />
        </PuzzleProvider>
        </UserProvider>
        </ThemeProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}
