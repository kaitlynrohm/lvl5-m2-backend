const express = require("express");
const router = express.Router();
const carValueCalculator = require("../api/carValue");

//Below is for get, change get to post for post request
router.post("/api/carValueCalc", (req, res) => {
  const model = req.body.model;
  const year = req.body.year;
  const result = carValueCalculator({ model: model, year: year });
  res.status(200).send(JSON.stringify(result));
});

module.exports = router;
