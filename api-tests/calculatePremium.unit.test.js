const { calculatePremium } = require("../routes/quoteCalc");
describe("calculatePremium", () => {
  it("should return the correct premiums for valid input", () => {
    const result = calculatePremium(6614, 5);
    expect(result).toEqual({ monthly_premium: 27.56, yearly_premium: 330.7 });
  });

  it("should return the correct premiums for minimum risk rating", () => {
    const result = calculatePremium(10000, 1);
    expect(result).toEqual({ monthly_premium: 8.33, yearly_premium: 100.0 });
  });

  it("should return the correct premiums for maximum risk rating", () => {
    const result = calculatePremium(10000, 5);
    expect(result).toEqual({ monthly_premium: 41.67, yearly_premium: 500.0 });
  });

  it("should return zero premiums for zero risk rating", () => {
    const result = calculatePremium(10000, 0);
    expect(result).toEqual({ monthly_premium: 0, yearly_premium: 0 });
  });

  it("should return zero premiums for zero car value", () => {
    const result = calculatePremium(0, 5);
    expect(result).toEqual({ monthly_premium: 0, yearly_premium: 0 });
  });
  it("should throw an error for negative car value", () => {
    expect(() => calculatePremium(-10000, 5)).toThrow(
      "Car value and risk rating must be non-negative"
    );
  });

  it("should throw an error for negative risk rating", () => {
    expect(() => calculatePremium(10000, -5)).toThrow(
      "Car value and risk rating must be non-negative"
    );
  });
});
