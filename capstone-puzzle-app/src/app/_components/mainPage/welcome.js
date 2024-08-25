'use client'
import { useContext } from "react";
import { UserContext } from "@/app/context";
import { SignupForm } from "./Signup";

const openSignUp = () => {

}

export default function Welcome() {
    
   const {currentUser, setCurrentUser} = useContext(UserContext);

    console.log(currentUser.name);

    if ( currentUser.name === undefined) {
        return (
            <div>
                <SignupForm />
                <div className="card m-1">
                    <div className="card-body">
                        <h5 className="card-title">Welcome</h5>
                        <p className="card-text">Please sign-In or sign up for an account!</p>
                        <button type="button" className="btn btn-primary m-2">Sign In</button>
                        <button type="button" className="btn btn-success m-2" data-bs-toggle='modal' data-bs-target='#sign-up-modal'>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
    else  {
        return(
            <h1>Welcome, {currentUser.name}!</h1>

    )}}

