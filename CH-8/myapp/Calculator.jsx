import { useState } from "react";
function Rus1(){
    const[Rus1,setformdata]=useState({});
    const[output,setoutput]=useState("");
    function hchange(e){
        setformdata({...Rus1,[e.target.name]:e.target.value})
    }

    function hsubmit(e){
        e.preventDefault()
        if(((!Rus1.n1)||(!Rus1.n2))){
            alert(`Null Input is INVALID!`)
        }
        else if(Rus1.op=="a"){
            alert(`Addition is :${parseInt(Rus1.n1)+parseInt(Rus1.n2)}`)
        }
        else if(Rus1.op=="s"){
            alert(`Subtraction is ${parseInt(Rus1.n1)-parseInt(Rus1.n2)}`)
        }
        else if(Rus1.op=="m"){
            alert(`Multiplication is ${parseInt(Rus1.n1)*parseInt(Rus1.n2)}`)
        }
        else if(Rus1.op=="d"){
            alert(`Division is ${parseInt(Rus1.n1)/parseInt(Rus1.n2)}`)
        }
        else{
        alert(`Invalid Entries`)}
    }
    return(
        <>
        <form onSubmit={hsubmit}>
            NUMBER_1 : <input type='numeric' name='n1'  onChange={hchange}/><br></br>
            NUMBER_2 : <input type='numeric' name='n2'  onChange={hchange}/><br></br>
            OPERATION : <select name="op" onChange={hchange}>
                    <option value='a'>Addition</option>
                     <option value='s'>Subtraction</option>
                     <option value='m'>Multiplication</option>
                     <option value='d'>Division</option>
            </select>
        
            <input type="submit" value="submit"></input>       
        </form>
        </>
    )
}
export default Rus1;