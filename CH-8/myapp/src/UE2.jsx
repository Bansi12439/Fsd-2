// DIGITAL CLOCK

import { useEffect, useState } from "react";
function UE2(){
    const [date,setdate]=useState(new Date());
    useEffect(()=>{const timer= setInterval(()=>{
        setdate(new Date())
    },1000)},[])
    return(
        <>
        <h1 style={{color:"violet"}}>Digital Clock</h1>
        <h1>{date.toLocaleTimeString()}</h1>
        <h3>
            Hour: {date.getHours()}<br></br>
            Minute: {date.getMinutes()}<br></br>
            Second: {date.getSeconds()}
        </h3>
        </>
    )
}
export default UE2;