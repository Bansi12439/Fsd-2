import img1 from "./assets/hero.png"
import "./Myapp.css"
function Comp1(){
    var n="ABC";
    return(<>
        <h1>Hello!!!</h1>
        <h3>Welcome</h3>
        <img src="/favicon.svg" width="300"></img>
        <img src={img1} className="i1"></img>
        <h3 style={{color:"blue",fontSize:"35px",fontStyle:"italic",
            textDecoration:"underline"
        }}>Hello "{n}"</h3>
        {/* Comments */}
    </>  
    )
}
export default Comp1;

// "{n}" --> "ABC"
// {"{n}"} --> {n}
// {n} --> ABC