import axios from "axios";
import { useEffect,useState } from "react";
export default function Axios2(){
    const [joke,setjoke]=useState("")
    function fetchjoke(){
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((res)=>{setjoke(res.data)})
        .catch((e)=>{console.log(e)})
    }
    useEffect(fetchjoke,[])
    return(
        <>
        <h2>{joke.setup}</h2>
        <h3>{joke.punchline}</h3>
        <button onClick={fetchjoke}>Generate Joke</button>
        </>
    )
}