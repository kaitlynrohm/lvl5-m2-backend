const express = require("express");
const router = express.Router();
const carValueCalculator = require("../api/carValue");

//Below is for get, change get to post for post request
router.post("/api/carValueCalc", (req, res) => {
  console.log(req.body);
  const model = req.body.model;
  const year = req.body.year;
  const result = carValueCalculator({ model: model, year: year });
  res.send(result);
});

module.exports = router;
