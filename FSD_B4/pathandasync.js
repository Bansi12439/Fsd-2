var p=require("path")
var fs=require("fs")
var mypath="LJ/first.txt"
var dir=p.dirname(mypath)
var base=p.basename(mypath)
// fs.mkdir(dir,(e)=>{
//     if(e){throw e}
//     else{ console.log("created")}
// })
fs.writeFile(dir+"/"+base,"Hello",(e)=>{
    if (e){console.log(e)
    }
    else{
        console.log("data written")
        fs.copyFile(dir+"/"+base,dir+"/second.txt",(e)=>{
        if (e){console.log(e)
        }
        else{
            console.log("data copied")
        }
})
    }
})

fs.unlink(dir+"/"+base,(e)=>{
    if(e){console.log(e)}
    else{console.log("deleted")}
})