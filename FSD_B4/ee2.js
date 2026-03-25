var eventemitter=require("events")
var ee=new eventemitter()
var fs=require("fs")
ee.on("createfolder",()=>{
    if(!fs.existsSync("abc")){
        fs.mkdirSync("abc")
    }
    else{
        console.log("Folder already exists")
        ee.emit("writefile")
    }
})
ee.on("writefile",()=>{
    fs.writeFileSync("abc/xyz.txt","Hello everyone!")
    ee.emit("appendfile")
    
})
ee.on("appendfile",()=>{
      fs.appendFileSync("abc/xyz.txt","\nHello how are you?")
      ee.emit("readfile")
})
ee.on("readfile",()=>{
    var d=fs.readFileSync("abc/xyz.txt","utf-8")
    console.log(d)
})
ee.emit("createfolder")
