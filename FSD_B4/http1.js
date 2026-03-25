var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.end("<h1>HTTP Module Example</h1>")
    res.write("hiii")
}).listen(7008,()=>{
    console.log("Server started https://localhost:7008")
})