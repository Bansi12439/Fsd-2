import img1 from "./assets/hero.png"
import Productlist from "./Productlist.jsx"
import "./Myapp.css"
function Productcard(){
    const products=[{name:"p1",price:"65000",image:img1,rating:"4.5"},
        {name:"p2",price:"67000",image:img1,rating:"4.6"},
        {name:"p3",price:"66000",image:img1,rating:"3.5"}
    ]
    return(
        <>
        <Productlist data={products}></Productlist> 
        </>
    )
}
export default Productcard;