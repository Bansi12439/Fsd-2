import Child from "./Child.jsx"
function Parent(){
    var obj={name:"Test",clg:"LJ University"};
    return(
        <>
        <Child data={obj}></Child>
        </>
    )
}
export default Parent