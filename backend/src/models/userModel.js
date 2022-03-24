const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _id: String,
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "User email is required"]
    }

})

const userModel = new mongoose.model("user", UserSchema)

module.exports = userModel