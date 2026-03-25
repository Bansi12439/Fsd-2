var eventemitter=require("events")
var ee=new eventemitter()
var fs=require("fs")
var fun1=(x)=>{
    console.log(`message from fun1 is ${x}`)
}
var fun2=(x)=>{
    console.log(`msg from fun2 is ${x}`)
}
ee.on("event1",fun1)
ee.on("event2",fun2)
ee.on("event1",fun2)
ee.on("event2",fun1)

ee.removeListener("event1",fun2)
ee.removeAllListeners("event2",fun1)

ee.emit("event1","B4_Students")
ee.emit("event2","FSD_2")

var c=ee.listenerCount("event1")
console.log(`Count is ${c}`)
var c1=ee.listenerCount("event2")
console.log(c1)