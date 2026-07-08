const mg = require("mongoose");
const validator = require("validator");
mg.connect("mongodb://127.0.0.1:27017/mdb4");

const myschema = new mg.Schema({
  coursename: String,
  instructor: String,
  duration: Number,
  fees: Number,
  mode: { type: String, enum: ["online", "offline"] },
});

const mymodel = new mg.model("courses", myschema);
const myfun = async () => {
  try {
    const data = [
      {
        coursename: "MERN",
        instructor: "ABC",
        duration: 2,
        fees: 20000,
        mode: "offline",
      },
      {
        coursename: "Python",
        instructor: "XYZ",
        duration: 1,
        fees: 8000,
        mode: "online",
    },
    {
        coursename: "ML",
        instructor: "PQR",
        duration: 3,
        fees: 25000,
        mode: "offline",
    },
    {
        coursename: "Cloud Computing",
        instructor: "JKL",
        duration: 3,
        fees: 15000,
        mode: "online",
    },
    {
        coursename: "UX/UI Design",
        instructor: "MNO",
        duration: 5,
        fees: 27000,
        mode: "offline",
    },
    ];
    // const result = await mymodel.insertMany(data)
    // console.log(result)

    // const test = await mymodel.updateOne({coursename:"ABC"},{$set:{duration:4,fees:30000}},{upsert:true})
    // console.log(test)

    // const test1= await mymodel.findOne({coursename:"MERN"})
    // console.log("ID",test1._id)

    // const test2 = await mymodel.findByIdAndUpdate(test1._id,{fees:35000,duration:3},{new:true})
    // console.log(test2)

    // const test3= await mymodel.findByIdAndDelete(test1._id)
    // if (test3){console.log("Deleted",test3)}
    // else{console.log("No course found")}

    // const test4= await mymodel.find().sort({fees:-1}).limit(1).skip(1)
    // console.log(test4)

    // const test5 = await mymodel.find(
    // {
    //     $and: [{ duration: { $gt: 4 } }, { mode: "offline" }],
    //     $nor: [{ fees: { $lt: 20000 } }],
    // },
    // { coursename: 1, _id: 1 });
    // console.log(test5);

    // const test6= await mymodel.countDocuments({mode:"offline"})
    // console.log(test6)

    // const test7= await mymodel.updateMany({},{$mul:{fees:1.1}})
    // console.log(test7)

    const test7= await mymodel.updateMany({},{$inc:{duration:-1}})
    console.log(test7)


} catch (e) {
    console.log(e);
}
};
myfun();
