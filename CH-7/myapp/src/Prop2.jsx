function Prop2(props){
    var n={color:"red",textDecoration:"underline"}
    return(
        <>
        <h1 style={n}>{props.name}</h1>
        <h2>{props.age+1}</h2>
        </>
    )
}
export default Prop2