const mongoose = require("mongoose");
let { db_credential_mongo } = require("../index");


 async function connection()  {
    try {
        await mongoose.connect(db_credential_mongo.mongo, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, mongoose };