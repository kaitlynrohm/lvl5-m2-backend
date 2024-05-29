const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/get_quote", (req, res) => {
  console.log("Received request:", req.body);
  const { car_value, risk_rating } = req.body;

  if (typeof car_value !== "number" || car_value <= 0) {
    return res.status(400).json({ error: "Invalid car value" });
  }

  if (typeof risk_rating !== "number" || risk_rating < 1 || risk_rating > 5) {
    return res.status(400).json({ error: "Invalid risk rating" });
  }
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
