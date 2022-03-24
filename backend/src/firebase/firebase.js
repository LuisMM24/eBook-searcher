
const admin = require("firebase-admin");
const { firebaseServiceConfig } = require("../config/config")

admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceConfig)
});

const auth = admin.auth()

module.exports = {
    admin: admin,
    auth: auth
}
