const mongoose = require("mongoose");
const validator = require("validator");
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
        unique: true,
        required: [true, "User email is required"],
        validate: {
            validator: (value) => validator.isEmail(value),
            message: (props) => `The email ${props.value} is not valid`
        }
    }

})

const userModel = new mongoose.model("user", UserSchema)

module.exports = userModel