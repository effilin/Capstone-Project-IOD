import NavBar from "../../_components/NavBar";
import '@/styles/dashboard.css';


export default function Dashboard() {
    return(
    <div>
        <div className="container m-3">
            <div className="row card-row">
                <h1 className="col">Your Dashboard</h1>
            </div>
            <div className="row card-row">
                <div className="col card">
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

                
                <div className="col card">
                    <div className="card-body">
                        <h4>this will be weather</h4>
                    </div>
                </div>

                <div className="col card">
                    <div className="card-body">
                        <h4>puzzles won:</h4>
                    </div>
                </div>


            </div>
            <div className="row card-row">
                <div className="col">
                    <div className="col card">
                        <div className="card-body">
                            <h4>Add Your Own Puzzle</h4>
                            <form>
                                <div className="m-2">
                                    <label htmlFor="question">Riddle: </label>
                                    <input className="ms-4" type="text" id="question" name="answer"></input>
                                </div>
                                <div className="m-2">
                                    <label htmlFor="answer">Answer: </label>
                                    <input input className="ms-3"type="text" id="answer" name="answer"></input>
                                </div>
                                <button type="button" className="btn btn-success" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}