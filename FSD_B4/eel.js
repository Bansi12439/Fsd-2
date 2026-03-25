var eventemitter=require("events")
var ee=new eventemitter()
ee.on("first",
    ()=>{console.log("First task")}
)
var add=(a,b)=>{console.log(`Addition is ${a+b}`)}
ee.on("second",add)
ee.on("second",()=>{console.log("completed")})
ee.on("first",()=>{console.log("first is completed")})
ee.emit("first")
ee.emit("second",3,6)

// First task
// first is completed
// Addition is 9     
// completed

