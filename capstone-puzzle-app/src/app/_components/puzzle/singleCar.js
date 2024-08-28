'use client'
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SingleCard() {
    const [value, setValue] = useState(front)
    const [toggle, setToggle] = useState(false)


    const [letterStyle, letterApi] = useSpring(
        () => ({
        from: { transform: ` rotateY(0deg)`},
        config:{ tension: 200, friction: 180, bounce: 1},
        
    }));
    

    const [flipStyle, api] = useSpring(
        () => ({
        from: {backgroundColor: color, transform: ` rotateY(0deg)`},
        config:{ tension: 180, friction: 10 },
        
    }));


        const handleClick = () => {

            setToggle(!toggle),

            setValue((current) => {
                if( current === front) {
                    return back 
                }
                else{
                    return front
                }
            }),
               

            api.start ({
                from: { backgroundColor: color, transform: ` rotateY(0deg)`},
                to: { backgroundColor: !toggle ? colorBack : color, transform: !toggle ? ` rotateY(360deg)` : `rotateY(-360deg)` },
                });
    

            letterApi.start({
                from: {transform: ` rotateY(0deg)`},
                to: {transform: !toggle ? ` rotateY(360deg)` : `rotateY(-360deg)` },

            })

            onClick( id, value );
           

        }
    
       
return (
    <Grid item xs={2} > 
    <div className="flipCard">
            <div className="flip-inner" sx={{ justifyContent: "center", alignItems: "center"}} key={id}>
                <animated.div className="flip-front" style={{...flipStyle}} onClick={handleClick}>
                   <animated.h1 style={{...letterStyle}}>{value}</animated.h1>
                </animated.div>
            </div>
        </div>
        </Grid>
    )

};

