const request = require("supertest");
const express = require("express");
const quoteCalc = require("../routes/quoteCalc");

let server; //holds instance of Express server. Declared here so to be accessible through entire block. Added to debug 'port in use' test fail

beforeEach(() => {
  const app = express();
  app.use(express.json());
  app.use("/api/get_quote", quoteCalc);
  server = app.listen(0); // Listen on a random free port, debugs 'port in use' test fail
});

afterEach(() => {
  server.close(); // Closes the server after each test
});

describe("POST /api/get_quote/get_quote", () => {
  it("should return the correct premiums for valid input", async () => {
    const res = await request(server)
      .post("/api/get_quote/get_quote")
      .send({ car_value: 6614, risk_rating: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 27.56, yearly_premium: 330.7 });
  });

  it("should return the correct premiums for minimum risk rating", async () => {
    const res = await request(server)
      .post("/api/get_quote/get_quote")
      .send({ car_value: 10000, risk_rating: 1 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 8.33, yearly_premium: 100.0 });
  });

  it("should return the correct premiums for maximum risk rating", async () => {
    const res = await request(server)
      .post("/api/get_quote/get_quote")
      .send({ car_value: 10000, risk_rating: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 41.67, yearly_premium: 500.0 });
  });

  it("should return error for car value of zero", async () => {
    const res = await request(server)
      .post("/api/get_quote/get_quote")
      .send({ car_value: 0, risk_rating: 3 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid car value" });
  });

  it("should return error for risk rating out of range", async () => {
    const res = await request(server)
      .post("/api/get_quote/get_quote")
      .send({ car_value: 10000, risk_rating: 6 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid risk rating" });
  });
});
