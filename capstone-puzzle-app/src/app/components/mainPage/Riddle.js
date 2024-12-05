'use client'

import'../../globals.css';
import '../../../styles/responsive.css';
import { useState, useEffect,useContext } from 'react';
import { UserContext } from '@/app/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RiddleAlert from '../alerts/riddleAlert';





export function Riddle() {

    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');
    const [guess, setGuess] = useState('');
    const [correct, setCorrect] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const {currentUser, setCurrentUser} = useContext(UserContext);
       

    const updateUser = async() => {
        console.log(currentUser.name)
            if ( !currentUser.name) {
                
                toastSignIn()
            } else{
                try {
                let newRiddleStat = currentUser.riddleStat + 1;
                
                const res = await fetch(`/api/users?name=${encodeURIComponent(currentUser.name)}&zipCode=${encodeURIComponent(currentUser.zipCode)}&theme=${encodeURIComponent(currentUser.theme)}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: currentUser.name, zipCode: currentUser.zipCode, theme: currentUser.theme,  puzzleStat: currentUser.puzzleStat, riddleStat: newRiddleStat })
                })
    
                if(res.ok) {
                    const newUser = await res.json();
                    setCurrentUser(newUser)
                    console.log(newUser)
                } else {
                    const errorMessage = await res.json();
                    console.log('error', errorMessage)
                    alert("failed to updated")
                }
            } catch (error) {
                console.log('OH NO, DID NOT GET IT', error)
            }
        }};

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


    const toastAlert = () => {
        toast(" Almost! Keep trying.")
    }
    const toastSignIn = () => {
        toast(" Sign in to keep track of your stats!")
    }


    const handleGuess = async(e, guess) => {
        e.preventDefault()
        const myAnswer = answer.toLowerCase().split(' ');
        const myGuess = guess.toLowerCase().split(' ');
        const length= myGuess.length;
        const aLength = myAnswer.length;
        let correctWords = [];

        console.log(myAnswer);
        console.log(myGuess);
        console.log(length);
        if(!guess) {
            alert('please enter your guess')
        }else{
            myGuess.map((word) => {
                myAnswer.includes(word)? correctWords.push(word): console.log("not included")
            })
            let percent = (correctWords.length/aLength) *100;
            console.log(`Percent : ${percent}%`);
            if (percent > 50 ) {
                setAlertVisible(true)
                updateUser();
                setCorrect( correct+1);
                setGuess('');
                
            } else {
                toastAlert();
                setGuess('');
            }
        }
        console.log(correct)
    };

    

    return(
        <div className="">
            <div className="card-body ">
                <h3 className='text'>Today's Riddle: </h3>
                <h5 className='text2'>{riddle}</h5>
                <div className='form-box d-flex justify-content-start'>
                <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" /> 
                    <form onSubmit={(e) => handleGuess(e, guess)}>
                        <label className='m-1 form-label text2' htmlFor="guess">Answer: </label>
                        <input className='m-1 form-control' type="text" id="guess" name="guess" value={guess} onChange={(e) => setGuess(e.target.value.toString())}/>
                        <button  type='submit' className='btn btn-primary m-1' >Submit</button>
                    </form>
                    {/* Alert for winning the riddle */
                    alertVisible? 
                    <div id="winnerAlert" >
                        <RiddleAlert onClose={() => setAlertVisible(false)} />
                    </div>:
                    <div></div>
                     }
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