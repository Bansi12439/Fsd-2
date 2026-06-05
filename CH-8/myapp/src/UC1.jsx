// use Contex
import UC2 from "./UC2.jsx";
import {createContext} from "react";
var Fname=createContext("A");
var Lname=createContext();
export default function UC1(){
    return(
        <>
        <Fname.Provider value={"Bansi"}>
            <Lname.Provider value={"Khunt"}>
                <UC2/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export{Fname,Lname};