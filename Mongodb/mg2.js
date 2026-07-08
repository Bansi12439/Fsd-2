const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/mdb4")
    .then(() => { console.log("success") })
    .catch((e) => { console.log(e) })

const myschema = new mg.Schema({
    username: String, email: String, active: Boolean, age: Number,
    doj: { type: Date, default: new Date().toLocaleDateString() }
}, { strict: false })

mg.pluralize(null)

const mymodel = new mg.model("person", myschema)
const newfun = async () => {
    try {
        const data1 = new mymodel({
            username: "PQR",
            email: "pqr@gmail.com",
            active: true,
            age: 31,
            city: "Ahmedabad"
        });
        const data2 = new mymodel({
            username: "XYZ",
            email: "xyz@gmail.com",
            active: true,
            age: 32,
            city: "rajkot"
        });
        const res = await mymodel.insertMany([data1, data2])
        console.log(res)
    }
    catch (e) {
        console.log(e)

    }
}
newfun();

// or
// const data = [{username: "ABC",email: "abc@gmail.com", active: true, age: 30, city: "Ahmedabad"},
//     { username: "ABC", email: "abc@gmail.com", active: true, age: 30, city: "Ahmedabad" },
//     { username: "ABC", email: "abc@gmail.com", active: true, age: 30, city: "Ahmedabad" }]