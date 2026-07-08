const expr = require("express")
const mg = require("mongoose")
const cors = require("cors")
const app = expr()
app.use(cors())
app.use(expr.json())
mg.connect("mongodb://127.0.0.1:27017/mdb4")
const myschema = new mg.Schema({email:String,password:String})
const mymodel = new mg.model("login",myschema)
app.post("/signup",async(req,res)=>{
    try{
        const {email}=req.body;
        const {password}=req.body;
        const data= new mymodel({email,password})
        await data.save()
        // await mymodel.find()
        res.send(`Email: ${data.email} & Paasword is ${data.password}`)
    }
    catch(e){
        console.log(e)
    }
})
app.listen(5000)