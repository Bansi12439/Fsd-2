import axios from "axios";
import { useEffect,useState } from "react";
// ---: Syntax :---
// axios
// .get("api")
// .then(res=>console.log(res.data))
// .catch((e)=>c.l(e))

export default function Axios(){
    const [image,setimage]=useState("");
    useEffect(()=>{
        setInterval(()=>{axios 
        .get("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{console.log(res.data);setimage(res.data)})
        .catch((e)=>console.log(e))
    },2000)
    },[]);

    return(
        <>
        <img src={image.message} alt="image" width="300" height="300"></img>
        </>
    )
}
