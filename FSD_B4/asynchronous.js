var fs=require("fs")
fs.mkdir("afs",(e)=>{
    if(e) {throw e;}
    console.log("Folder created")
})
fs.writeFile("afs/test.txt","HII!",(e)=>{
    if(e) {console.log(e);}
    else{
        console.log("data written")
    }
})

fs.appendFile("afs/test.txt","Hello",(e)=>{
    if(e) console.log(e);
    else{
        console.log("data append")
    }
})
fs.readFile("afs/test.txt","utf-8",(e,d)=>{
    if(e){throw e;}
    else{
        console.log(d);
    }
})
fs.copyFile("afs/test.txt","temp.txt",(e)=>{
    if(e){throw e;}
    else{console.log("data copied")}
})

fs.rename("afs/test.txt","afs/my.txt",(e)=>{
    if(e) throw e;
    else{
        console.log("done")
    }
})

fs.unlink("afs/my.txt",(e)=>
{
    if(e) throw e;
    else{
        console.log("deleted")
    }
})

fs.rmdir("afs",(e)=>
{
    if(e) {console.log(e)}
    else{
        console.log("folder deleted")
    }
})