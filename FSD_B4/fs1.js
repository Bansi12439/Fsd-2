// File system module(fs)
var fs=require("fs");
// fs.mkdirSync("b4");  // to create folder
fs.writeFileSync("test.txt","hello! students!");  // to create a file
// fs.rmdirSync("b4") // to remove current folder

var r=fs.readFileSync("test.txt");
console.log(r.toString());

fs.appendFileSync("test.txt","\n how are you?");
 var o=fs.readFileSync("test.txt","utf-8");
console.log(o);

fs.renameSync("test.txt","temp.txt");
fs.unlinkSync("test.txt");