const { jwtSecret, cookieCfg } = require("../config")
const { INTERNAL_ERR } = require("../handler/error-handler")
const jwt = require("jsonwebtoken")

exports.check_auth = (req, res, next) => {
    try {
        var token = null
        if (req && req.signedCookies && req.signedCookies.token) {
            token = req.signedCookies["session_token"]
        }
        jwt.verify(token, jwtSecret, (err, payload) => {
            if (err) return res.json({ error: true, success: false, authorization: false, message: "Unauthorized access." })
            console.log(payload);
            req.uid = payload.uid
            req.exam_code = payload.exam_code
            return next()
        })
    } catch (err) {
        return res.json({ error: true, success: false, authorization: false, message: "Unauthorized access." })
    }
}

exports.create_session = (req, res) => {

    try {
        var { exam_code, uid } = req.info

        jwt.sign(
            {
                uid,
                exam_code
            },
            jwtSecret,
            (err, token) => {
                console.log("hello");
                if (err) return res.json({ error: true, authorization: false, message: "Internal server error." })

                const expiresIn = 60 * 60 * 24 * 14 * 1000

                res.cookie("session_token", token, {
                    maxAge: expiresIn,
                    ...cookieCfg,
                })
                console.log("hello");

                return res.json({ success: true, message: "Setup completed." })
            }
        )
    } catch (error) {
        console.error(error)
        return res.json(INTERNAL_ERR)
    }

}