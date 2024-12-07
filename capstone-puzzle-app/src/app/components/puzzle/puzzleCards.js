'use client'
import { useEffect, useState } from "react";
import SingleCard from "./singleCard";
import { useContext } from "react"
import { PuzzleContext } from "@/app/context"
import PuzzleAlert from "../alerts/puzzleAlert";
import { UserContext } from "@/app/context";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function PuzzleCards() {

    const [cardList, setCardList] = useState([]); /* this sets the single cards */
    const [currentCards, setCurrentCards] = useState([]) 
    const [number, setNumber] = useState(1)
    const {puzzleInfo, setPuzzleInfo} = useContext(PuzzleContext);
    const [ correct, setCorrect] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false);
    const {currentUser, setCurrentUser} = useContext(UserContext);

/* update user stats if won */ 
    const updateUser = async() => {
            console.log(currentUser.name)
        
            if ( !currentUser.name) {
                toastSignIn()
                setCurrentUser({puzzleStat: 1})
            } else{
                try {
                let newPuzzleStat = puzzleInfo.number + 1;
                
                const res = await fetch(`/api/users?name=${encodeURIComponent(currentUser.name)}&zipCode=${encodeURIComponent(currentUser.zipCode)}&theme=${encodeURIComponent(currentUser.theme)}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: currentUser.name, zipCode: currentUser.zipCode, theme: currentUser.theme,  puzzleStat: newPuzzleStat, riddleStat: currentUser.riddleStat })
                })
    
                if(res.ok) {
                    const newUser = await res.json();
                    setCurrentUser(newUser)
                } else {
                    const errorMessage = await res.json();
                    console.log('error', errorMessage)
                    alert("failed to updated")
                }
            } catch (error) {
                console.log('OH NO, DID NOT GET IT', error)
            }
        }};

        const toastSignIn = () => {
            toast(" Sign in to keep track of your stats!")
        }
    
useEffect(() => {
    
    if (!puzzleInfo.answer) {
        null
    } else {

        const answer = puzzleInfo.answer.toString();
        const myString = answer.toUpperCase();
        /* cardStock is Array of the correct answer */
        const cardStock = myString.split('');
        const arrayLength = cardStock.length;
        const spaces = cardStock.filter((x) => x === ' ').length;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let results = '';

    for (let i=0; i < (arrayLength - spaces); i++) {
        results += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    for(let i=0; i < spaces; i++) {
        let spot = Math.floor(Math.random() * arrayLength);
        results = results.slice(0, spot) + ' ' + results.slice(spot);
            }
    /* finalResults is the array of random char */
    let finalResults = results.split('');

    /* assigning side A and and side B randomly */

    let sideA = cardStock;
    let sideB = finalResults;
    let myCards = cardStock.map((card, index) => {
        return card = {
          sideA: sideA.at(index), 
          sideB: sideB.at(index), 
          key: (index + 1), 
          id:(index + 1), 
          activeSide: Math.random() > .5? sideA.at(index): sideB.at(index),
    }})

   setCardList(myCards)
   setCurrentCards(myCards)

}}, [puzzleInfo])


/* handles the click and the change of current cards */
const  handleChange = ( value , id) => {
    let newCards = currentCards.map(card => card.id === id? {...card, activeSide: value}:card)
    setCurrentCards(newCards); 
 };


 useEffect(()=>{
    if (!puzzleInfo.answer) {
        return
    } else {
    const answerString = puzzleInfo.answer.toString();
    const answerUpperCase = answerString.toUpperCase(); /* this is the answer */
    
    let currentActiveSide = currentCards.map((card) => card.activeSide); /* this is the active side */

    let isCorrect = currentActiveSide.every((card, index) => { 
        const matched = card === answerUpperCase[index];
        console.log (`card ${card} === answer${answerUpperCase[index]} : matched :${matched}`)
        return matched
        })
    console.log(isCorrect)
    
    if (isCorrect === true) {
        setCorrect(true);
        setAlertVisible(true)
        updateUser()
       /*
        setNumber(number +1)
        setPuzzleNumber(puzzleNumber +1)
         */
    }

}

 },[currentCards])
 

return (
    <div className="container text-center">
        <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" /> 
        <div className="row">
            <div className="col ">
                <h5 className="text">Riddle: {puzzleInfo.riddle}</h5> 
            </div>
            <div className="col-1">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle pop-box" type="button" data-bs-toggle="dropdown" aria-expanded="false" onChange={(e) => setNumber(e.target.value)}>
                    # {number}
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item" onClick={() => setNumber(1)}>1</li>
                      <li className="dropdown-item" onClick={() => setNumber(2)}>2</li>
                      <li className="dropdown-item" onClick={() => setNumber(3)}>3</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Alert for winning the riddle */
                    alertVisible? 
                    <div id="winnerAlert" >
                        <PuzzleAlert onClose={() => setAlertVisible(false)} />
                    </div>:
                    <div></div>
                     }
        <div className="row">
            <div className="col d-flex flex-wrap">
                { !currentCards?
                <h1 className="text">Loading....</h1>:
                    cardList.map( card => (
                        <SingleCard {...card} handleChange={handleChange} key={card.key}/> ))
                }
            </div>
       </div>
    </div>
)

}
