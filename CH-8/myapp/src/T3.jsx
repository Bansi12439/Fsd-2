import {useContext} from "react";
import {Fn} from "./T1"
export default function T3(){
    const fn=useContext(Fn)
    return(   
        <>
        <table border="2px">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>{fn[0].id}</td>
                <td>{fn[0].name}</td>
                <td>{fn[0].marks}</td>
            </tr>
            <tr>
                <td>{fn[1].id}</td>
                <td>{fn[1].name}</td>
                <td>{fn[1].marks}</td>
            </tr>
        </table>
        </>
    )
}
export{Fn}