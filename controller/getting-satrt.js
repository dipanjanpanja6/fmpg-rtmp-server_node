const { INTERNAL_ERR } = require("../handler/error-handler")

exports.validate = async (req, res, next) => {
    try {
        const { uid, exam_code, src } = req.body
        console.log({ uid, exam_code, src });
        
        req.info = { uid, exam_code, src }
        return next()
    } catch (error) {
        console.error(error)
        return res.json(INTERNAL_ERR)
    }
}
