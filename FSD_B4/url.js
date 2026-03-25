var url=require("url")
var addr="http://video.google.com:8080/about?id=20&year=2027#students"
var up=url.parse(addr,true)
console.log(up)
process.noDeprecation=true //for only warning remove
var a=up.query.year
if (a%4==0){
    console.log("leap year")
}
else{
    console.log("not leap year")
}
