function calculatePremium(car_value, risk_rating) {
  if (car_value < 0 || risk_rating < 0) {
    throw new Error("Car value and risk rating must be non-negative");
  }

  const yearly_premium = parseFloat(
    ((car_value * risk_rating) / 100).toFixed(2)
  );
  const monthly_premium = parseFloat((yearly_premium / 12).toFixed(2));
  return { monthly_premium, yearly_premium };
}

//validation separated from the routing logic after review
function validateRequest(req, res, next) {
  const { car_value, risk_rating } = req.body;

  if (typeof car_value !== "number" || car_value <= 0) {
    return res.status(400).json({ error: "Invalid car value" });
  }

  if (typeof risk_rating !== "number" || risk_rating < 1 || risk_rating > 5) {
    return res.status(400).json({ error: "Invalid risk rating" });
  }

  next();
}

module.exports = { calculatePremium, validateRequest };
