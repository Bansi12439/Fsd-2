import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Shome from "./Shome";
import Sproject from "./Sproject";
import Snopage from "./Snopage";
import img1 from "../assets/hero.png";
import img2 from "../assets/tv1.jpg";
import img3 from "../assets/tv2.jpg";
import img4 from "../assets/tv3.jpg";
import img5 from "../assets/tv4.jpg";

function Student(){
    const s = [
        {name:"project1", desc: "LoremIpsum", image:img1},
        {name:"project2", desc: "Hello", image:img2},
        {name:"project3", desc: "Studyyyy hard", image:img3},
        {name:"project4", desc: "Successs", image:img4},
        {name:"project5", desc: "Smart City", image:img5},
    ]

    return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Shome/>}></Route>
                    <Route path="/projects" element={<Sproject data={s}/>}></Route>
                    <Route path="*" element={<Snopage/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Student;