import {useContext} from "react";
import {Num} from "./Ex.jsx"
export default function Ex3(){
    const nn=useContext(Num)
    const result = (nn.n1*nn.n2)/(nn.n3)
    return(   
        <>
        <h2 style={{color:"red"}}>Result:  {result}</h2>
        </>
    )
}