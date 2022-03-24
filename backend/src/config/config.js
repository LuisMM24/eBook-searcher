require("dotenv/config")

module.exports = {
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost",
    PORT: process.env.PORT || 4000,
    DB_URI: `mongodb://${process.env.DB_URL}/${DB_NAME}`
}
