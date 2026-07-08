import {useState} from 'react';
import axios from 'axios';
function Client(){
    const [username,setusername]=useState(" ");
    const handlesignup = async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/signup",{username})
            alert (`Welcome ${username}`)
            setusername(``)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <h1>User data</h1>
        <form onSubmit={handlesignup}>
            <input value={username} onChange={(e)=>{
                setusername(e.target.value)
            }}></input>
            <input type='submit'></input>
        </form>
        <h3>Welcome {username}</h3>
        </>
    )
}
export default Client;