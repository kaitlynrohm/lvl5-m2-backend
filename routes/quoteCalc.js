const express = require("express");
const router = express.Router();
const { calculatePremium } = require("../api/premiumCalc");
const { validateRequest } = require("../api/premiumCalc");

router.post("/get_quote", validateRequest, (req, res) => {
  console.log("Received request:", req.body);
  const { car_value, risk_rating } = req.body;

  const premiums = calculatePremium(car_value, risk_rating);
  res.json(premiums);
});

// Added calculatePremium to the router object to keep frontend happy
router.calculatePremium = calculatePremium;

module.exports = router;
