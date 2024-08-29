'use client'
import NavBar from "../../_components/NavBar";
import '@/styles/dashboard.css';
import { useState } from "react";
import { useContext } from "react"
import { PuzzleContext } from "@/app/context"


export default function Dashboard() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');
    const {puzzleNumber, setPuzzleNumber} = useContext(PuzzleContext);

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
    return(
    <div>
        <div className="container m-3">
            <div className="row card-row m-2">
                <h1 className="col">Your Dashboard</h1>
            </div>
            <div className="row card-row m-2">
                <div className="col card m-2">
                    <div className="card-body">
                        <h4>Appearance Preferences</h4>
                        <form>
                            <label htmlFor='themeChoice'>Theme Preference: </label>
                            <select id="themeChoice" name="theme">
                                <option value='gardenView'>Garden View</option>
                                <option value='synthWave'> Synth Wave</option>
                                <option value='nightSky'>Night Sky</option>
                            </select>
                        </form>
                    </div>
                </div>

                
                <div className="col card m-2">
                    <div className="card-body">
                        <h4>this will be weather</h4>
                    </div>
                </div>

                <div className="col card m-2">
                    <div className="card-body">
                        <h4>puzzles won:</h4>
                    </div>
                </div>


            </div>
            <div className="row card-row m-2">
                <div className="col">
                    <div className="col card">
                        <div className="card-body">
                            <h4>Add Your Own Puzzle</h4>
                            <form>
                                <div className="m-2">
                                    <label htmlFor="question">Riddle: </label>
                                    <input className="ms-4" type="text" id="question" name="answer" value={riddle} onChange={(e) => setRiddle(e.target.value)}></input>
                                </div>
                                <div className="m-2">
                                    <label htmlFor="answer">Answer: </label>
                                    <input input className="ms-3"type="text" id="answer" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
                                </div>
                                <button type="button" className="btn btn-success" onClick={handleSubmit} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}