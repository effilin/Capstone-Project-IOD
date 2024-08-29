'use client'
import { useEffect, useState, useContext } from "react"
import { UserContext } from "@/app/context";


export default function Info() {

 const [weather, setWeather] = useState(null)
 const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=bbe3bd0fbac242edb73195504241307&q=23228')
        .then(response => response.json())
        .then(json => {
            console.log( json)
            setWeather(json)

        })
    }, []);

if (weather === '') {
    return (
        <div> Loading...</div>
    )
} else {

    return (

    <div>
        <Card>
        {weather ? 
       <h3>Looks like the weather is {weather.current.condition.text}. Best to play a puzzle!</h3> 
       : <h3>Its a perfect day for a puzzle!</h3>}
       </Card>
    </div>
    )
}
}