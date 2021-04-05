const { validate } = require("../controller/getting-satrt")
const { getQuestions, submitQuestion } = require("../controller/questions")
const { check_auth, create_session } = require("../middleware")

const router = require("express").Router()

router.post("/validate", validate, create_session)
router.route('/questions',).all(check_auth,).get(getQuestions).post(submitQuestion)

module.exports = router
