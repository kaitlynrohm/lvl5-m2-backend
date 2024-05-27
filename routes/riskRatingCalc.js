const express = require('express')
const router = express.Router()

//Below is for get, change get to post for post request
router.get('api url', (req, res) => {
  //Api code
})
router.post('api url', (req, res) => {
  riskRatingCalculator(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.error(err))
})

module.exports = router
