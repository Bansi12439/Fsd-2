import img1 from "../assets/hero.png"
function About(){
    return(
        <>
        <h1 style={{color:"purple",fontSize:"50px"}}>Welcome to About Page</h1>
        <img src={img1} width="500" alt="About"></img>
        </>
    )
}
export default About;