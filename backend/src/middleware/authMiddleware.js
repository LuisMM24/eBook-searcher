const { auth } = require("../firebase/firebase")

async function authMiddleware(req, res, next) {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("bearer ")
    ) {
        const bearerToken = req.headers.authorization.substr(7)
        try {
            const userClaims = await auth.verifyIdToken(bearerToken)

            const { email, uid } = userClaims;
            req.user = {
                email: email,
                uid: uid
            };
            next()

        } catch (err) {
            next(err)
        }
    } else {
        res.status(401).send({
            body: null,
            error: "Unauthorized"

        })
    }

}

module.exports = authMiddleware