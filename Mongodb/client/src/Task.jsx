import {useState} from 'react';
import axios from 'axios';
function Task(){
    const [email,setemail]=useState(" ");
    const [password,setpassword]=useState(" ")
    const handlesignup = async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/signup",{email,password})
            alert (`Welcome`)
            setemail(``)
            setpassword(``)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <h1>User data</h1>
        <form onSubmit={handlesignup}>
            <input value={email} onChange={(e)=>{
                setemail(e.target.value)
            }}></input>
            <input value={password} onChange={(e)=>{
                setpassword(e.target.value)
            }}></input>
            <input type='submit'></input>
        </form>
        <h3>Welcome {email}</h3>
        </>
    )
}
export default Task;