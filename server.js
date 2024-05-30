const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express(); // Initialize app first

// Import routes
const quoteCalc = require("./routes/quoteCalc.js");

// Middleware
app.use(cors());
app.use(express.json());



// =========== ENDPOINTS =========== //
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// // Quote calculation api
app.use(quoteCalc);

// ============== PORT ============== //
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is alive on http://localhost:${PORT}`);
});

module.exports = app;


