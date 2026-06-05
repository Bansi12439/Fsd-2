import { useState } from "react";
function Form1(){
    const [formdata,setformdata]=useState({});
    function handlechange(e){
        const {name,value}=e.target;
        setformdata({...formdata,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault();
        if (!formdata.fname || !formdata.cont || !formdata.pass || !formdata.pass1){
            alert(`All fields are required`)
        }
        else if(formdata.cont.length !== 10){
            alert(`contact number must be 10 digits`)
        }
        else if(formdata.pass.length <=8 ){
            alert(`pass must be 8 or more digits`)
        }
        else if(formdata.pass!==formdata.pass1){
            alert("not valid pass") 
        }
        else{
            alert(`Thank YOu! \n Firstname: ${formdata.fname}`)
        }
    }

    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>First Name: </label>
            <input type="text" name="fname" onChange={handlechange} required></input><br></br>
            Contact no: <input type="text" name="cont" onChange={handlechange} required></input><br></br>
            Pass: <input type="password" name="pass" onChange={handlechange} required></input><br></br>
            Confirm Pass: <input type="pass" name="pass1" onChange={handlechange} required></input><br></br>
            {/* Message: <textarea  name="msg" value='msg' onChange={handlechange}></textarea><br></br>
            Gender: <input type="radio" name="gender" value="Male" onChange={handlechange}></input>Male
            <input type="radio" name="gender" value="Female" onChange={handlechange}></input>Female<br></br>
            <select name="city" onChange={handlechange}>
                <option  name="city" value="abd">ABD</option>
                <option  name="city" value="raj">RAJKOT</option>
                <option  name="city" value="surat">SURAT</option>
            </select><br></br> */}
            <input type="submit"></input>
        </form>
        </>
    )
}
export default Form1