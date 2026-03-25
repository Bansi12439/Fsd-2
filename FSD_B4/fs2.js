var fs=require("fs");
// fs.mkdirSync("abc");
// fs.writeFileSync("./abc/my.txt","Node js");
fs.appendFileSync("my.txt","\n Fs module");
// fs.copyFileSync("./abc/my.txt","./abc/new.txt");

var o=fs.readFileSync("new.txt","utf-8");
console.log(o);
