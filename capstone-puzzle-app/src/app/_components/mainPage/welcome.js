'use client'
import { useContext } from "react";
import { UserContext } from "@/app/context";
import { addUser, findUser } from "@/app/api/users/route";


export default function Welcome() {
    
   const {currentUser, setCurrentUser} = useContext(UserContext);

    console.log(currentUser.name);

    if ( currentUser.name === undefined) {
        return (
         <div>
            <div>
                <div className="card m-1">
                    <div className="card-body">
                        <h5 className="card-title">Welcome</h5>
                        <p className="card-text">Please sign-In or sign up for an account!</p>
                        <button type="button" className="btn btn-primary m-2"data-bs-toggle='modal' data-bs-target='#sign-in-modal'>Sign In</button>
                        <button type="button" className="btn btn-success m-2" data-bs-toggle='modal' data-bs-target='#sign-up-modal'>Sign Up</button>
                    </div>
                </div>
            </div>
{/* modal one is for sign up */}
             <div className='modal fade' id="sign-up-modal" tabIndex='-1' aria-labelledby="signupModalLabel" aria-hidden="true">
             <div className='modal-dialog'>
                 <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signupModalLabel">SignUp</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <form className="modal-body" action={addUser}>
                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Name</label>
                                <input type='text' id='name' name='name' className="form-control" ></input><br />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='zipCode'className="form-label"> Zipcode: for weather updates</label>
                                <input type='text' id='zipCode' name='zipCode' className="form-control"></input><br />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='password'className="form-label"> Create a Password </label>
                                <input type='text' id='password' name='password'className="form-control"></input><br />
                            </div>
                            <p> Choose Your Theme </p>

                            
                                <input type="radio" id="garden" name="theme" value="1" className="radioButtons"/>
                                <label htmlFor="garden" className="radioLabel"> Garden </label>
                          
                                <input type="radio" id="synth" name="theme" value="2" className="radioButtons" />
                                <label htmlFor="synth" className="radioLabel"> SynthWave </label>
                            
                                <input type="radio" id="night" name="theme" value="3" className="radioButtons"/>
                                <label htmlFor="night" className="radioLabel"> Night Sky </label>
                            
                            <div className="modal-footer">
                                <button type='submit' className='btn btn-outline-success'>Submit</button>
                            </div>
                
                        </form>
                     
                 </div>
             </div>
         </div>
{ /* modal two is for sign In */}
         <div className='modal fade' id="sign-in-modal" tabIndex='-1' aria-labelledby="signInModalLabel" aria-hidden="true">
             <div className='modal-dialog'>
                 <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signInModalLabel">SignUp</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <form className="modal-body" action={findUser}>
                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Name</label>
                                <input type='text' id='name' name='name' className="form-control" ></input><br />
                            </div>
        
                            <div className="mb-3">
                                <label htmlFor='password'className="form-label"> Create a Password </label>
                                <input type='text' id='password' name='password'className="form-control"></input><br />
                            </div>
                            <div className="modal-footer">
                                <button type='submit' className='btn btn-outline-success'>Submit</button>
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

