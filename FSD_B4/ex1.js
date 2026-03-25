var fs=require("fs")
var data={d:{a:10,b:20,c:[20,30]}}
var d1=JSON.stringify(data)
fs.writeFileSync("cal.txt"," "+d1)
fs.readFileSync("cal.txt","utf-8")
var i=data.d.a+ data.d.b
console.log(i)
var s=data.d.c[1] - data.d.b
console.log(s)
var m=data.d.c[0] * data.d.c[1]
console.log(m)
fs.appendFileSync("cal.txt","\na and b is: "+i+"\n"+s+"\n"+m)
