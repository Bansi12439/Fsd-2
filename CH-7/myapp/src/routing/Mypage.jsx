import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Myhome from "./Myhome";
import Mystudent from "./Mystudent";
import Mynopage from "./Mynopage";
import S1 from "../assets/hero.png"

export default function Mypage(){
    const students=[{
        rollno:1,name:"BHP",photo:S1,marks:85},
        {rollno:2,name:"BP",photo:S1,marks:95},
        {rollno:3,name:"HP",photo:S1,marks:85}
    ]
    return(
        <>
        <Router>
            <ul type="none">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="*">Nopage</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Myhome/>}></Route>
                <Route path="/students" element={<Mystudent data={students}/>}></Route>
                <Route path="*" element={<Mynopage/>}></Route>
            </Routes>
        </Router>
        </>
    )
}
