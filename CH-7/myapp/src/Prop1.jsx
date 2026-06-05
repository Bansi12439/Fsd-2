import Prop2 from "./Prop2.jsx"
function Prop1(){
    var n ="XYZ";
    return(
        <>
        <Prop2 name="ABC" age="20"></Prop2>
        <Prop2 name={n} age={22}></Prop2>
        </>
    )
}
export default Prop1;