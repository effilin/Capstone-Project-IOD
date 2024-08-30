'use client'
import { useEffect, useState, useContext } from "react"
import { UserContext } from "@/app/context";


export default function Weather() {

 const [weather, setWeather] = useState()
 const {currentUser, setCurrentUser} = useContext(UserContext);
 const [conditions, setConditions] = useState();
 const [city, setCity] = useState();
 const [state, setState] = useState();
 const [temp, setTemp] = useState();
 const [error, setError] = useState()



    useEffect(() => {
        const zipCode = currentUser.zipCode || 23228
        
        fetch(`http://api.weatherapi.com/v1/current.json?key=bbe3bd0fbac242edb73195504241307&q=${encodeURIComponent(zipCode)}`)
        .then(response => response.json())
        .then((json) => { 
         if (json.error) {
            console.log(json.error)
         }else
        
            setWeather(json)
        })
    }, [currentUser]);


useEffect(() => {
    if(!weather){
        console.log('no weather');
    }
    if(weather) {
    
    setConditions( weather.current.condition.text);
    setCity( weather.location.name)
    setState( weather.location.region);
    setTemp( weather.current.temp_f)
}},[weather])

return ( <div>
    {!weather? 
    <div> Loading...</div>:
    <div>
        <h5>{city}, {state}</h5>
        <h5> Weather conditions: </h5>
        <p>{conditions}.</p>
        <p>Temperature: {temp} &#x2109;</p>

    </div>
}
</div>
)
}
