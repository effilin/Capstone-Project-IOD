'use client'
import { useContext } from "react";
import { UserContext , ThemeContext} from "@/app/context";
import { POST } from "@/app/api/users/route";
import { useState, } from "react";


export default function Welcome() {

    const [userName, setUserName] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const {theme, changeTheme} = useContext(ThemeContext);
    
    
    
   const {currentUser, setCurrentUser} = useContext(UserContext);

   const handleSubmit = async (e) => {
        e.preventDefault();
        if ( !userName) {
            return alert( "please enter username")
        }
        if (!areaCode) {
           return alert( "please enter zip code")
        }
        setCurrentUser({name: userName, zipCode: areaCode})
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: userName, zipCode: areaCode, theme: theme })
            });

        if (res.ok) {
            console.log('user created successfully')
        }
        } catch (error) {
            console.log('something went wrong')
        };
   };

   const getUser = async(e) => {
    e.preventDefault();

        if ( !userName) {
            return alert( "please enter username")
        }
        if (!areaCode) {
           return alert( "please enter zip code")
        }
       
        try{
            const res = await fetch(`/api/users?name=${encodeURIComponent(userName)}&zipCode=${encodeURIComponent(areaCode)}`, {
                method: 'GET',
            });

            if(res.ok) {
                const user = await res.json();
                setCurrentUser(user)
                console.log(user)
            } else {
                const errorMessage = await res.json();
                console.log('error', errorMessage)
                alert('User was not found')
            }
        } catch (error) {
            console.log('OH NO, DID NOT GET IT', error)
        }
   };
   


    if ( currentUser.name === undefined) {
        return (
         <div>
            <div>
                <div className="card m-1 main-card">
                    <div className="card-body">
                        <h5 className="card-title">Welcome</h5>
                        <p className="card-text">Please sign-In or sign up for an account!</p>
                        <button type="button" className="btn btn-primary m-2"data-bs-toggle='modal' data-bs-target='#sign-in-modal'>Sign In</button>
                        <button type="button" className="btn btn-success m-2" data-bs-toggle='modal' data-bs-target='#sign-up-modal' >Sign Up</button>
                    </div>
                </div>
            </div>
{/* modal one is for sign up */}
             <div className='modal fade' id="sign-up-modal" tabIndex='-1' aria-labelledby="signupModalLabel" aria-hidden="true">
             <div className='modal-dialog'>
                 <div className="modal-content pop-box">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signupModalLabel">SignUp</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                    </div>
                        <form className="modal-body">
                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Name</label>
                                <input type='text' id='name' name='name' className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)}></input><br />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='zipCode'className="form-label"> Zipcode: for weather updates</label>
                                <input type='text' id='zipCode' name='zipCode' className="form-control" value={areaCode} onChange={(e) => setAreaCode(e.target.value)}></input><br />
                            </div>
                    
                            <p> Choose Your Theme </p>

                            
                                <input type="radio" id="garden" name="theme" value="garden-view" className="radioButtons" onChange={(e) => changeTheme(e.target.value)} />
                                <label htmlFor="garden" className="radioLabel"> Garden </label>
                          
                                <input type="radio" id="synth" name="theme" value="synth-wave" className="radioButtons" onChange={(e) => changeTheme(e.target.value)}/>
                                <label htmlFor="synth" className="radioLabel"> SynthWave </label>
                            
                                <input type="radio" id="night" name="theme" value="night-sky" className="radioButtons" onChange={(e) => changeTheme(e.target.value)}/>
                                <label htmlFor="night" className="radioLabel"> Night Sky </label>
                            
                            <div className="modal-footer">
                                <button type='submit' className='btn btn-outline-success'  data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
                            </div>
                
                        </form>
                     
                 </div>
             </div>
         </div>
{ /* modal two is for sign In */}
         <div className='modal fade' id="sign-in-modal" tabIndex='-1' aria-labelledby="signInModalLabel" aria-hidden="true">
             <div className='modal-dialog'>
                 <div className="modal-content pop-box">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signInModalLabel">SignIn</h5>
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
                                <button type='submit' className='btn btn-outline-success'  data-bs-dismiss="modal" onClick={getUser}>Submit</button>
                            </div>
                            
                
                        </form>
                     
                 </div>
             </div>
         </div>
    </div>
        )} else  {
        return(
            <h1>Welcome, {currentUser.name}!</h1>

    )}}

