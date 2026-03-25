var fs=require("fs");
fs.writeFileSync("b4.txt","HIIIIIIIII");
console.log("Sync task completed")
fs.writeFile("b4.txt","HIIIIIIII",(e)=>{
    if(e){
        console.log(e)
    }
    else{
        console.log("Async task completed")
    }
})
console.log("last execution")

// output: Sync task completed
// last execution
// Async task completed