const express = require('express')
const router = express.Router()
const risk = require('../api/riskRating')

router.post('/', (req, res) => {
  try {
    res.send(risk.riskRatingCalculator(req.body))
  } catch (err) {
    res.status(500).send({ error: 'Internal Server Error' })
  }
})

module.exports = router
