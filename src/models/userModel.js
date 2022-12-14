const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;


const userSchema = new Schema({
    email: { type: String, required: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: String, require: false }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
