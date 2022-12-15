const mongoose = require("mongoose");
let { db_credential_mongo } = require("../index");


 async function connection()  {
    try {
        await mongoose.connect("mongodb://mongo:J6akW0KVl3QcHlCh2DJl@containers-us-west-96.railway.app:6309", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, mongoose };
