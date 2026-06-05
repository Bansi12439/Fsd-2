// Welcome to My Portfolio also show student Name, Course, and Education
const s = {
    name: "ABC",
    Course: "CSE",
    Education:"Btech"
}
function Shome(){
    return(
        <>
            <h1 style={{color:'purple', fontSize:"50px"}}>
                Welcome to my Portfolio!
            </h1>
            <h3>Name : {s.name}</h3>
            <h3>Course : {s.Course}</h3>
            <h3>Education : {s.Education}</h3>
        </>
    )
}

export default Shome;