const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });
const userSchema = {
    name: String,
    email: String,
    password: String
};
const userModel = mongoose.model("users",userSchema);

module.exports = userModel;
// y*j*GxnpYZcGC1a
// https://github.com/Bhola-kumar/user-auth-react-app.git
// https://github.com/Bhola-kumar/user-auth-react-app.git