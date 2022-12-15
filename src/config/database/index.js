const mongoose = require("mongoose");
let { db_credential_mongo } = require("../index");


 async function connection()  {
    try {
        await mongoose.connect("mongodb+srv://mongo:3vBPVa2ttmr878pHeZwl@containers-us-west-120.railway.app:6253", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, mongoose };
