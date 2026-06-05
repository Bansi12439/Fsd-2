import img1 from "../assets/hero.png"
function Home(){
    return(
        <>
        <h1 style={{color:"purple",fontSize:"50px"}}>Welcome to Home Page</h1>
        <img src={img1} width="500" alt="Home"></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio placeat, 
            excepturi quae sint sequi commodi praesentium neque earum. Beatae, minima!</p>
        </>
    )
}
export default Home;