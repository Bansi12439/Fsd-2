function Events(){
    const handlesubmit=(e)=>{
        e.preventDefault();
        var u=document.getElementById('un').value;
        alert(`Welcome ${u}!`)
    }
    function hc(e){
        document.getElementById('test').innerHTML=e.target.value;
        console.log(e.target.value)
    }
    const hdc = ()=>{
        alert(' Clicked twice')
    }
    return(
        <>
        <h1>Events Example</h1>
        <form onSubmit={handlesubmit}>
            <input id="un" onChange={hc}></input>
            <input type="submit"></input>
        </form>
        <h2 id="test"></h2>
        <button onDoubleClick={hdc}>Click</button>
        </>
    )
}
export default Events;