const mongoose = require("mongoose");
let { db_credential_mongo } = require("../index");


 async function connection()  {
    try {
        await mongoose.connect("mongodb+srv://mongo:MkUdgvTKYfjQvD5vL64p@containers-us-west-17.railway.app:6670", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, mongoose };
