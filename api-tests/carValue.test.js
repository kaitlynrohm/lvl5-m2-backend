const carValueCalculator = require("../api/carValue");

describe("API 1 tests", () => {
  test("Sunny day scenario", () => {
    expect(carValueCalculator({ model: "Civic", year: 2020 })).toEqual(6620);
  });
  test("Numbers only is ok", () => {
    expect(carValueCalculator({ model: "911", year: 2020 })).toEqual(2020);
  });
  test("Test case: '911', 2020. expected outcome 2020. Test description: Numbers and letters only is ok", () => {
    expect(carValueCalculator({ model: "911c", year: "2020" })).toEqual(2320);
  });
  test("negative year", () => {
    expect(carValueCalculator({ model: "Task-force", year: "-987" })).toEqual(
      "Error: invalid year - to low"
    );
  });
  test("Test case: 'C200', 'twenty twenty'. expected outcome error message. Test description: Wrong data type", () => {
    expect(
      carValueCalculator({ model: "C200", year: "twenty twenty" })
    ).toEqual("Error: invalid year - not a number");
  });
});
