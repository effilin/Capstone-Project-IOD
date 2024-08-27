

export async function fetchRiddle() {

    const riddle = await fetch('https://riddles-api.vercel.app/random', {
      cache: 'no-store'
    }
    )

    if(!riddle.ok){
        throw new Error
    }
    return riddle.json()
}

 export default async function Riddle() {
    const riddleJson = await fetchRiddle()
    const newRiddle = riddleJson.riddle
    const answer = riddleJson.answer
    

    return(
        <div className="card riddle-card ">
            <div className="card-body">
                <h3>Today's Riddle: </h3>
                <h5>{newRiddle}</h5>
                <form>
                    <label htmlFor="guess">answer: </label>
                    <input type="text" id="guess" name="guess"/>
                </form>

            </div>
        </div>
    )

 }