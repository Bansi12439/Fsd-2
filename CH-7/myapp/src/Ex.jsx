// Write a reactJS program to perform the tasks as asked below.
// •	Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js, Comp3.js. 
// •	Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the numbers using useContext.

import {createContext} from "react";
import Ex2 from "./Ex2.jsx"
var Num= createContext({n1:3,n2:8,n3:2})
export default function Ex1(){
    return(
        <>
            <Ex2/>
        </>
    )
}
export{Num}