const db = require("../models/")

async function signUp(req, res, next) {
    const { email, uid } = req.user
    try {
        const user = await db.Users.findOne({ _id: uid })
        console.log(user)
        if (user) {
            res.sendStatus(200)
        } else {
            await db.Users.create({
                _id: uid,
                email: email
            })
            res.sendStatus(201)
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    signUp: signUp
}