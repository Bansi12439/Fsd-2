import {useState} from "react";

function US2(){
    const [count, setcount] = useState(10);
    function handlecount1(){
        if(count < 50){
            setcount(count+1);
        }
        else {
            document.write("Limit reached")
        }
        
    }
    function handlecount2(){
        if(count > 0){
            setcount(count-1);
        }
        else {
            document.write("Limit reached")
        }
    }

    return(
        <>
            <p id="p1"></p>
            <h1>{count}</h1>
            <button onClick={handlecount1}>Click</button>
            <br/> 
            <button onClick={handlecount2}>Decrese</button>
        </>
    )
}

export default US2;