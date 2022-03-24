const mongoose = require("mongoose")
const { DB_URI } = require("../config/config")

function connect() {
    return mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connect