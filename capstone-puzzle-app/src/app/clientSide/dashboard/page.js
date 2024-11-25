'use client'
import '../../globals.css';
import '../../../styles/responsive.css'
import { useEffect, useState } from "react";
import { useContext } from "react"
import { PuzzleContext, ThemeContext, UserContext } from "@/app/context"
import Weather from "@/app/_components/weather/weather";


export default function Dashboard() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');
    const [userName, setUserName] = useState('');
    const [areaCode, setAreaCode] = useState('');
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

   const updateUser = async(e) => {
    e.preventDefault();
        if ( !userName) {
            return alert( "please enter username")
        }
        if (!areaCode) {
           return alert( "please enter zip code")
        }
        
        try{
            const res = await fetch(`/api/users?name=${encodeURIComponent(userName)}&zipCode=${encodeURIComponent(areaCode)}&theme=${encodeURIComponent(theme)}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: currentUser.name, zipCode: currentUser.zipCode, theme: currentUser.theme })
            })

            if(res.ok) {
                const newUser = await res.json();
                setCurrentUser(newUser)
                console.log(newUser)
                alert("user updated")
            } else {
                const errorMessage = await res.json();
                console.log('error', errorMessage)
                alert("failed to updated")
            }
        } catch (error) {
            console.log('OH NO, DID NOT GET IT', error)
        }
   };

   const deleteUser = async(e) => {
    e.preventDefault();

        if ( !currentUser.name) {
            return alert( "please enter username")
        }
        if (!currentUser.zipCode) {
           return alert( "please enter zip code")
        }
       
        try{
            const res = await fetch(`/api/users?name=${encodeURIComponent(currentUser.name)}&zipCode=${encodeURIComponent(currentUser.zipCode)}`, {
                method: 'DELETE',
            });

            if(res.ok) {
                const user = await res.json();
                setCurrentUser(user)
                console.log(user)
            } else {
                const errorMessage = await res.json();
                console.log('error', errorMessage)
            }
        } catch (error) {
            console.log('OH NO, DID NOT GET IT', error)
        }
   };

   console.log(currentUser)
    return(
    <div>
        <div className="container">
            <div className="row" >
                <div className='d-flex justify-content-evenly'>
                    {!currentUser.name?
                    <h1 className="text">Dashboard</h1>:
                    <h1 className='text'>Dashboard: Welcome Back {currentUser.name}</h1>}
                </div>
            </div>
            <div className="row dash-container d-flex flex-row justify-content-around flex-wrap">
                <div className="card top-row-dash main-card">
                    <div className="card-body">
                        <h3 className='text'>Preferences</h3>
                        <form className='m2'>
                            <label htmlFor='themeChoice' className='m-1'>Theme : </label>
                            <select id="themeChoice" name="theme" onChange={handleTheme}>
                                <option value='garden-view'>Garden View</option>
                                <option value='synth-wave'> Synth Wave</option>
                                <option value='night-sky'>Night Sky</option>
                            </select>
                        </form>
                        <div className='m-2'>
                           {!currentUser.name? <p className='text'>Please Sign In</p>:
                           <div>
                                <div>
                                    <p>Need to update or delete your info?</p>
                                    <button type="button" className="btn btn-primary m-2"data-bs-toggle='modal' data-bs-target='#update-modal'>Update User</button>
                                    <button type="button" className="btn btn-primary m-2" onClick={deleteUser}>Delete User</button>
                                </div>
                            </div>}
                        </div>

                        {/* modal for updating user info */}
                        <div className='modal fade' id="update-modal" tabIndex='-1' aria-labelledby="signInModalLabel" aria-hidden="true">
                            <div className='modal-dialog'>
                                <div className="modal-content pop-box">
                                   <div className="modal-header">
                                       <h5 className="modal-title" id="UpdateModalLabel">Update Info</h5>
                                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                   </div>
                                       <form className="modal-body" >
                                           <div className="mb-3">
                                               <label htmlFor='name' className="form-label">Name</label>
                                               <input type='text' id='name' name='name' className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} ></input><br />
                                           </div>
                                           <div className="mb-3">
                                               <label htmlFor='zipCode'className="form-label"> Zipcode: for weather updates</label>
                                               <input type='text' id='zipCode' name='zipCode' className="form-control" value={areaCode} onChange={(e) => setAreaCode(e.target.value)}></input><br />
                                           </div>
                       
                                           <div className="modal-footer">
                                               <button type='submit' className='btn btn-outline-success'  data-bs-dismiss="modal" onClick={updateUser}>Submit</button>
                                           </div>
                                           
                               
                                       </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className=" card main-card top-row-dash ">
                    <div className="card-body ">
                        <h4 className='text'>Stats</h4>
                        <h6>Puzzle wins:</h6>
                        <h6>Riddle wins:</h6>
                    </div>
                </div>

                <div className="card main-card ">
                    <div className="card-body">
                        <Weather/>
                    </div>
                </div>

                <div className="card main-card ">
                    <div className="card-body">
                        <h4 className='text'>Add Your Own Puzzle</h4>
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