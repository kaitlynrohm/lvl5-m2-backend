// ====== Packages and imports ====== //
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

 

// Import routes
const carValueCalc = require("./routes/carValueCalc.js");
const riskRatingCalc = require("./routes/riskRatingCalc.js");
const quoteCalc = require("./routes/quoteCalc.js");

// Middleware
app.use(cors({ origin: process.env.SITE_URL || "*" })); //using * to allow all origins, may have fixed the bug in quoteCalc
app.use(express.json());

// =========== ENDPOINTS =========== //
// Initial setup in Postman
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Car value calculation api
app.use("/api", carValueCalc);

// Risk rating calculation api
app.use("/api", riskRatingCalc);

// Quote calculation api
app.use("/api", quoteCalc);

// ============== PORT ============== //
const PORT = process.env.PORT;
app
  .listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("PORT is already in use.");
    } else {
      console.log("Server Errors: ", error);
    }
  });
