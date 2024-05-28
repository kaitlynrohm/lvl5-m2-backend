const request = require("supertest");
const app = require("../server");

describe("POST /api/get_quote", () => {
  it("should return the correct premiums for valid input", async () => {
    const res = await request(app)
      .post("/api/get_quote")
      .send({ car_value: 6614, risk_rating: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 27.56, yearly_premium: 330.7 });
  });

  it("should return the correct premiums for minimum risk rating", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: 1 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 8.33, yearly_premium: 100.0 });
  });

  it("should return the correct premiums for maximum risk rating", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ monthly_premium: 41.67, yearly_premium: 500.0 });
  });

  it("should return error for car value of zero", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 0, risk_rating: 3 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid car value" });
  });

  it("should return error for negative car value", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: -1000, risk_rating: 3 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid car value" });
  });

  it("should return error for risk rating of zero", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: 0 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid risk rating" });
  });

  it("should return error for risk rating exceeding the maximum value", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: 6 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid risk rating" });
  });

  it("should return error for negative risk rating", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: -1 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid risk rating" });
  });

  it("should return error for non-integer car value", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: "abc", risk_rating: 3 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid car value" });
  });

  it("should return error for non-integer risk rating", async () => {
    const res = await request(app)
      .post("/get_quote")
      .send({ car_value: 10000, risk_rating: "high" });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: "Invalid risk rating" });
  });
});

module.exports = app;
