'use client'
 import { useEffect, useState } from "react";

export default function PuzzleCards() {

    const [puzzle, setPuzzle] = useState('');
    const [cards, setCards]= useState('');
    const number = 1;

    useEffect(() => {
        const fetchData = async() => {
                try {
            const res= await fetch(`/api/puzzles?number=${encodeURIComponent(number)}`, {
                    method: 'GET',
                });
    
                if(res.ok) {
                    const puzzle = await res.json();
                    setPuzzle({riddle: puzzle.riddle, answer: puzzle.answer })
                } else {
                    const errorMessage = await res.json();
                    console.log('error', errorMessage)
                }
            } catch (error) {
                console.log('OH NO, DID NOT GET IT', error)
            }
       };
       fetchData();
    }, []);

const Cards = async() => {

    const answer = await puzzle.answer
    const cardStock = answer.split('');
    const arrayLength = cardStock.length;
    const spaces = cardStock.filter((x) => x === ' ').length;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let results = '';
    for (let i=0; i < (arrayLength - spaces); i++) {
        results += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    /*for(let i=0; i < spaces; i++) {
        results += 
    }*/
    console.log(results)

return cardStock
}
Cards()

return (
    <div>
        <h3>Riddle: {puzzle.riddle}</h3>

    </div>
)

}
