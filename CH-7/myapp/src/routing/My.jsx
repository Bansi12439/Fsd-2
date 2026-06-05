import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nopage from "./Nopage"

function My(){
    return(
        <>
        <Router>
            <ul type='None'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/nopage">Nopage</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>  
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<Nopage/>}></Route>    
            </Routes>
        </Router>
        </>
    )
}
export default My;