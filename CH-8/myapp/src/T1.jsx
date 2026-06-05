import T2 from "./T2.jsx";
import {createContext} from "react";
var obj=[{name:'ABC',marks:20,id:1},
    {name:'XYZ',marks:21,id:2}
]
var Fn=createContext();

export default function T1(){
    return(
        <>
        <Fn.Provider value={obj}>
                <T2/>
        </Fn.Provider>
        </>
    )
}
export{Fn};