exports.getQuestions = async (req, res) => {
  try {
    const { uid, exam_code } = req
    console.log({ uid, exam_code })
    return res.json({ success: true, data: questions_data })
  } catch (error) {}
}

const questions_data = [
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 20000 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 10000 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 5000 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 9000 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 20900 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 15000 },
  { ques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi fermentum id euismod sit. " + Math.random() * 100, id: Math.random() * 100, time: 2000 },
]

exports.submitQuestion = async (req, res) => {
  try {
    const { uid, exam_code } = req,
      { chunk, ques_id, ques, time } = req.body

    console.log({ chunk, ques_id, ques, time })
    return res.json({ success: true, data: { ques_id, exam_code, uid } })
  } catch (error) {}
}
