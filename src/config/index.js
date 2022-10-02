require("dotenv").config();

let config = {
    port: process.env.PORT || 8080,
    secret:process.env.SECRET
}

let db_credential_mongo = {
    mongo: process.env.MONGO_DB
}


module.exports = { config, db_credential_mongo }