var fs=require("fs")
fs.writeFile("s1.txt","L J",(e)=>{
    if(e) {console.log(e);}
    else{
       fs.writeFile("s2.txt","HII!",(e)=>{
        if(e) {console.log(e);}
        else{
        console.log("data written")
        }
        })
    }
})

fs.copyFile("s2.txt","s1.txt",(e)=>{
    if(e){throw e;}
    else{
        fs.appendFile("s2.txt","\nL J",(e)=>{
            if(e) console.log(e);
            else{
                console.log("data append")
            }
        })
    }}
)
