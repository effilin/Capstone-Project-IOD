'use client'
import '../../../styles/puzzle.css';
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SingleCard({sideA , sideB, handleChange, id, activeSide}) {

    const [value, setValue] = useState(activeSide)
    
    

 useEffect (() => {
    const random =  Math.random();   
    random <= .5? setValue(sideA):setValue(sideB)}, []);
    console.log(value)


    const [letterStyle, letterApi] = useSpring(() => ({
        from: { transform: ` rotateY(0deg)`},
        config:{ tension: 200, friction: 180, bounce: 1},
        
    }));
    

    const [flipStyle, api] = useSpring(() => ({
        from: { transform: ` rotateY(0deg)`},
        config:{ tension: 180, friction: 10 },
        
    }));


    const handleClick = () => {
        let newValue = "";
        if(value === sideA) {
            newValue = sideB 
        }
        else{
            newValue = sideA
        }
        setValue(newValue),
        api.start ({
                from: { transform: ` rotateY(0deg)`},
                to: { transform: value === sideA ? ` rotateY(360deg)` : `rotateY(-360deg)` },
                })
        letterApi.start({
                from: {transform: ` rotateY(0deg)`},
                to: {transform: value === sideA ? ` rotateY(360deg)` : `rotateY(-360deg)` },
            })
        handleChange( newValue, id );
            console.log( newValue , id)
        }
    
       
return (
    
     
    <div className="card-puzzle" >
            <animated.div className="flip-inner card-body" style={{...flipStyle}} onClick={handleClick}>
                <div className="flip-front" >
                   <animated.h1 style={{...letterStyle}}>{value}</animated.h1>
                </div>
            </animated.div>
    </div>
    )

};

