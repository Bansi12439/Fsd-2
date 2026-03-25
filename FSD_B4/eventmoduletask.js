var eventemitter=require("events")
var ee=new eventemitter()
var fs=require("fs")
ee.on("circle",(r)=>{
    if (r<0){
        console.log("radius must be positive")
    }
    else{
        console.log(`area of circle is ${3.14*r*r}`)
    }
})
ee.emit("circle",2.0)
