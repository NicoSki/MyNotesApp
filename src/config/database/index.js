const mongoose = require("mongoose");
let { db_credential_mongo } = require("../index");


 async function connection()  {
    try {
        await mongoose.connect("mongodb+srv://NCS:Contraseniademongo@ncs.yqgqfrj.mongodb.net/mynotesapp?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo DB is connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, mongoose };
