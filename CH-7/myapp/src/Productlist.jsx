function Productlist(props){
    return(
        <> <table border="2" >
        {
            props.data.filter((p)=>p.rating>4).map((p)=>
                <tr>
                    <td>{p.name}</td>
                    <td><img src={p.image} class="i1"></img></td>
                    <td>{p.rating}</td>
                    <td>{p.price}</td>
                </tr>
            )
        }</table>
        </>
    )
}
export default Productlist;