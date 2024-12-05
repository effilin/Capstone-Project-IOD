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

    const [puzzle, setPuzzle] = useState('');
    const [cards, setCards]= useState('');
    const [cardList, setCardList] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [number, setNumber] = useState(1)
    const {puzzleNumber, setPuzzleNumber} = useContext(PuzzleContext);
    const [ correct, setCorrect] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false);
    const {currentUser, setCurrentUser} = useContext(UserContext);
    

    useEffect(() => {
        const fetchData = async() => {
                try {
            const res= await fetch(`/api/puzzles?number=${encodeURIComponent(number)}`, {
                    method: 'GET',
                });
    
                if(res.ok) {
                    const puzzleResult = await res.json();
                    setPuzzle({riddle: puzzleResult.riddle, answer: puzzleResult.answer, count:puzzleResult.count })
                    setPuzzleNumber(puzzleResult.count)
                    console.log(puzzleResult)
                } else {
                    const errorMessage = await res.json();
                    console.log('error', errorMessage)
                }
            } catch (error) {
                console.log('OH NO, DID NOT GET IT', error)
            }
       };
       fetchData();
    }, [number]);

    const updateUser = async() => {
        console.log(currentUser.name)
            if ( !currentUser.name) {
                
                toastSignIn()
            } else{
                try {
                let newPuzzleStat = currentUser.puzzleStat + 1;
                
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

        const toastSignIn = () => {
            toast(" Sign in to keep track of your stats!")
        }
    
useEffect(() => {
    if (puzzle === '') {
        null
    } else {

        const answer = puzzle.answer.toString();
        const myString = answer.toUpperCase();
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

    let finalResults = results.split('');

    setCards({front: cardStock, back: finalResults})
    }}, [puzzle] );

    

useEffect(() =>{
 if (cards == '') {
     null
 } else {
    const cardList = [];
    let myCards = cards.front
    const cardCount = myCards.length;
    console.log(cardCount);

    /* assigning side A and and side B randomly */
   for (let i=0; i < cardCount; i++) {
    let random = Math.random();
    if(random >= .5) {
        let sideA = cards.front;
        let sideB = cards.back;
        cardList.push({sideA: sideA.at(i), sideB: sideB.at(i), key: (i + 1), id:(i + 1), activeSide: sideA.at(i) })
   } else {
        let sideA = cards.back;
        let sideB = cards.front;
        cardList.push({sideA: sideA.at(i), sideB: sideB.at(i), key: (i + 1), id:(i + 1), activeSide: sideA.at(i) })
   }}
   setCardList(cardList)
   setCurrentCards(cardList)
   console.log(cardList)
}}, [cards, puzzle])


const  handleChange = ( value , id) => {
    let newCards = currentCards.map(card => card.id === id? {...card, activeSide: value}:card)
    setCurrentCards(newCards); 
    let isCorrect = currentCards.every((card) => card.activeSide[id] === cards.front[id] )
    if (isCorrect === true) {
        setCorrect(true);
        setAlertVisible(true)
        updateUser()
        setNumber(number +1)
        setPuzzleNumber(puzzleNumber +1)
    }
    console.log(`this isCorrect ${isCorrect}`)

 };
 

return (
    <div className="container text-center">
        <ToastContainer position="top-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" /> 
        <div className="row">
            <div className="col ">
                <h5 className="text">Riddle: {puzzle.riddle}</h5> 
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
                { !puzzle.answer?
                <h1 className="text">Loading</h1>:
                    cardList.map( card => (
                        <SingleCard {...card} handleChange={handleChange} key={card.key}/> ))
                }
            </div>
       </div>
    </div>
)

}
