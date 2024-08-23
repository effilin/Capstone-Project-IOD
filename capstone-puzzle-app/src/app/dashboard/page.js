import NavBar from "../_components/NavBar";


export default function Dashboard() {
    return(
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <h1 className="col">Your Dashboard</h1>
            </div>
            <div className="row">
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
        </div>
    </div>
)}