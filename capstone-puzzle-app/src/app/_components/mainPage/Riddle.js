'use client'

import'../../globals.css';
import '../../../styles/responsive.css';
import { useState, useEffect } from 'react';


export function Riddle() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');
    const [guess, setGuess] = useState('');
    const [correct, setCorrect] = useState(0);

    useEffect(() => {

        const getRiddle = async() => {
            try {
                const newRiddle = await fetch('/api/riddle')
                console.log(newRiddle)
                const data = await newRiddle.json()
                console.log(data)
     
                    if (newRiddle) {
                        console.log('riddle fetched')
                        setRiddle(data.riddle)
                        setAnswer(data.answer)
                    } else {
                        console.log(`failed to fetch riddle:${newRiddle.status}`)
                    }  
            }catch(error) {
                console.log("error fetching the riddle in client")
            }
        };
        getRiddle()

    }, [correct]);


    const handleGuess = async(e, guess) => {
        e.preventDefault()
        console.log(answer);
        console.log(guess);
        if(!guess) {
            alert('please enter your guess')
        }

    }
    

    return(
        <div className="">
            <div className="card-body ">
                <h3 className='text'>Today's Riddle: </h3>
                <h5>{riddle}</h5>
                <div className='form-box d-flex justify-content-start'>
                    <form onSubmit={(e) => handleGuess(e, guess)}>
                        <label className='m-1 form-label text' htmlFor="guess">Answer: </label>
                        <input className='m-1 form-control' type="text" id="guess" name="guess" value={guess} onChange={(e) => setGuess(e.target.value.toString())}/>
                        <button  type='submit' className='btn btn-primary m-1' >Submit</button>
                    </form>
                </div>
                <div className='d-flex justify-content-around'>
                    <h6>Powered by: 
                        <a href='https://riddles-api.vercel.app/' alt='link to Riddles API'> Riddles API</a>
                    </h6>
                </div>

            </div>
        </div>
    )

 }