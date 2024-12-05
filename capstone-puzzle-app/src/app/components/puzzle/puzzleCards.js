'use client'
import { useEffect, useState } from "react";
import SingleCard from "./singleCard";
import { useContext } from "react"
import { PuzzleContext } from "@/app/context"
import RiddleAlert from "../alerts/riddleAlert";

export default function PuzzleCards() {

    const [puzzle, setPuzzle] = useState('');
    const [cards, setCards]= useState('');
    const [cardList, setCardList] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [number, setNumber] = useState(1)
    const {puzzleNumber, setPuzzleNumber} = useContext(PuzzleContext);
    const [ correct, setCorrect] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false);
    

    useEffect(() => {
        const fetchData = async() => {
                try {
            const res= await fetch(`/api/puzzles?number=${encodeURIComponent(number)}`, {
                    method: 'GET',
                });
    
                if(res.ok) {
                    const puzzleResult = await res.json();
                    setPuzzle({riddle: puzzleResult.riddle, answer: puzzleResult.answer })
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
    }}, [puzzle, number] );

    

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
}}, [cards])


const  handleChange = ( value , id) => {
    let newCards = currentCards.map(card => card.id === id? {...card, activeSide: value}:card)
    setCurrentCards(newCards); 
    let isCorrect = currentCards.every((card) => card.activeSide[id] === cards.front[id] )
    if (isCorrect === true) {
        setCorrect(true);
        setAlertVisible(true)
    }
    console.log(`this isCorrect ${isCorrect}`)

 };



return (
    <div className="container text-center">
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
                        <RiddleAlert onClose={() => setAlertVisible(false)} />
                    </div>:
                    <div></div>
                     }
        <div className="row">
            <div className="col d-flex flex-wrap">
                { cardList.length === 0?
                <h1 className="text">Loading</h1>:
                cardList.map( card => (
                <SingleCard {...card} handleChange={handleChange} key={card.key}/> ))
                }
            </div>
       </div>
    </div>
)

}
