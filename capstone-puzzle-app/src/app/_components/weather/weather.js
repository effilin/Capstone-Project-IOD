'use client'
import { useEffect, useState, useContext } from "react"
import { UserContext } from "@/app/context";
import '../../globals.css';


export default function Weather() {

 const [weather, setWeather] = useState()
 const {currentUser, setCurrentUser} = useContext(UserContext);
 const [conditions, setConditions] = useState();
 const [city, setCity] = useState();
 const [state, setState] = useState();
 const [temp, setTemp] = useState();
 const [error, setError] = useState()



    useEffect(() => {

        let isMounted = true;
        const zipCodeCurrent = currentUser.zipCode;
      
        const getWeather = async() => {
            try {
                const res = await fetch('/api/weather', {
                 method:'POST',
                 headers: {
                     'Content-Type': 'application/json'
                    },
                 body: JSON.stringify({ zipCode: zipCodeCurrent })
                });
                console.log(res)
     
                const data = await res.json()
                if(isMounted) {
                    if (res.ok) {
                        console.log('weather fetched')
                        setWeather(data)
                    };
                    if (!res.ok) {
                        console.log(`failed to fetch weather:${res.status}`)
                    }
                }
                 
            }catch(error) {
                console.log("error fetching")
            }
        };
        getWeather()

        return() => {
            isMounted = false;
        }

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

console.log(`weather is${weather}`)

return ( 
<div>
    {!weather? 
    <div> Loading...</div>:
    <div>
        <h5 className="text">Weather in: {city}, {state}</h5>
        <p>{conditions}.</p>
        <p>Temperature: {temp} &#x2109;</p>

    </div>}
    <div>
        <h6>Powered by : </h6> 
        <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
    </div>

</div>
)
}
