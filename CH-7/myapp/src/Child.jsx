function Child(props){
    var n={color:"yellow",textDecoration:"underline",backgroundColor:"pink"}
    return(
        <>
        <h1 style={n}>Welcome {props.data.name} to {props.data.clg}!</h1>
        </>
    )
}
export default Child