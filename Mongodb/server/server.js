const expr = require("express")
const mg = require("mongoose")
const cors = require("cors")
const app = expr()
app.use(cors())
app.use(expr.json())
mg.connect("mongodb://127.0.0.1:27017/mdb4")
const myschema = new mg.Schema({username:String})
const mymodel = new mg.model("reactdata",myschema)
app.post("/signup",async(req,res)=>{
    try{
        const {username}=req.body;
        const data= new mymodel({username})
        await data.save()
        // await mymodel.find()
        res.send()
    }
    catch(e){
        console.log(e)
    }
})
app.listen(5000)