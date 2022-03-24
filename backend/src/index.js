const config = require("./config/config")
const app = require("./app")
const connect = require("./db/connect")

connect().then(() => {
    console.log("Database connected")
    app.listen(config.PORT, () => {
        console.log("server listening...")
    })
})