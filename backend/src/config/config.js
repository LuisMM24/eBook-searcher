require("dotenv/config")

const firebaseServiceConfig = {
    FB_CERT_CERT_TYPE: process.env.FB_CERT_CERT_TYPE,
    FB_CERT_PROJECT_ID: process.env.FB_CERT_PROJECT_ID,
    FB_CERT_PRIVATE_KEY_ID: process.env.FB_CERT_PRIVATE_KEY_ID,
    FB_CERT_PRIVATE_KEY: process.env.FB_CERT_PRIVATE_KEY,
    FB_CERT_CLIENT_EMAIL: process.env.FB_CERT_CLIENT_EMAIL,
    FB_CERT_CLIENT_ID: process.env.FB_CERT_CLIENT_ID,
    FB_CERT_AUTH_URI: process.env.FB_CERT_AUTH_URI,
    FB_CERT_TOKEN_URI: process.env.FB_CERT_TOKEN_URI,
    FB_CERT_AUTH_PROVIDER_X_509_CERT_URL: process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
    FB_CERT_CLIENT_X_509_CERT_URL: process.env.FB_CERT_CLIENT_X_509_CERT_URL
}

module.exports = {
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost",
    PORT: process.env.PORT || 4000,
    DB_URI: `mongodb://${process.env.DB_URL}/${process.env.DB_NAME}`,
    firebaseServiceConfig: firebaseServiceConfig
}
