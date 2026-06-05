function Map(){
    var students=[{id:1,name:"ABC",std:4},
        {id:2,name:"ASD",std:5},
        {id:3,name:"CVB",std:6},
        {id:4,name:"BHP",std:5},
        {id:5,name:"QWE",std:5}
    ]
    return(
        <>
        {students.filter((s)=>s.std===5).map((s)=>
            <div key={s.id}>
                <h2>Student Name:{s.name.toLowerCase()}</h2>
                <h3>Standard:{s.std+1}</h3>
            </div>
        )}
        </>
    )
}
export default Map;