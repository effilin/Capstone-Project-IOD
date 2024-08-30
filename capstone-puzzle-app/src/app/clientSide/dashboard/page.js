'use client'
import '@/styles/dashboard.css';
import { useEffect, useState } from "react";
import { useContext } from "react"
import { PuzzleContext, ThemeContext, UserContext } from "@/app/context"
import Weather from "@/app/_components/weather/weather";


export default function Dashboard() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');
    const {puzzleNumber, setPuzzleNumber} = useContext(PuzzleContext);
    const {theme, changeTheme} = useContext(ThemeContext);
    const {currentUser, setCurrentUser} = useContext(UserContext);


    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await fetch('/api/puzzles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({number: puzzleNumber + 1, riddle: riddle, answer: answer})
            });

        if (res.ok) {
            console.log('puzzle created successfully')
        }
        } catch (error) {
            console.log('something went wrong')
        };
   };

   const handleTheme = (e) => {
    changeTheme(e.target.value)
   }
   
    return(
    <div>
        <div className="container m-3">
            <div className="row justify-content-around m-2">
                <h1 className="col text">Your Dashboard</h1>
            </div>
            <div className="row card-row m-2">
                <div className="col col-lg-4 col-md-4 col-sm-8 col-12 card m-2">
                    <div className="card-body">
                        <h4>Preferences</h4>
                        <form>
                            <label htmlFor='themeChoice'>Theme : </label>
                            <select id="themeChoice" name="theme" onChange={handleTheme}>
                                <option value='garden-view'>Garden View</option>
                                <option value='synth-wave'> Synth Wave</option>
                                <option value='night-sky'>Night Sky</option>
                            </select>
                        </form>
                    </div>
                </div>

                
                <div className="col col-lg-4 col-md-4 col-sm-8 col-12 card m-2">
                    <div className="card-body">
                        <Weather/>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-4 col-sm-8 col-12 card m-2">
                    <div className="card-body">
                        <h4>puzzles won:</h4>
                    </div>
                </div>


            </div>
            <div className="row card-row m-2">
                <div className="col col-lg-4 col-md-4 col-sm-8 col-12 card">
                    <div className="card-body">
                        <h4>Add Your Own Puzzle</h4>
                        <form>
                            <div className="m-2">
                                <label htmlFor="question">Riddle: </label>
                                <input className="ms-4" type="text" id="question" name="answer" value={riddle} onChange={(e) => setRiddle(e.target.value.toString())}></input>
                            </div>
                            <div className="m-2">
                                <label htmlFor="answer">Answer: </label>
                                <input className="ms-3"type="text" id="answer" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value.toString())}></input>
                            </div>
                            <button type="button" className="btn btn-success" onClick={handleSubmit} >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}