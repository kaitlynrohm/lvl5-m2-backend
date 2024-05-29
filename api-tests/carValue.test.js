const carValueCalculator = require("../api/carValue");

describe("API 1 tests", () => {
  describe.each([
    ["Sunny day scenario", { model: "Civic", year: "2020" }, 6620],
    ["Numbers only is ok", { model: "911", year: "2020" }, 2020],
    ["Numbers and letters only is ok", { model: "911c", year: "2020" }, 2320],
    [
      "negative year",
      { model: "C200", year: "-987" },
      "Error: invalid year - to low",
    ],
    [
      "Wrong data type",
      { model: "C200", year: "twenty twenty" },
      "Error: invalid year - not a number",
    ],
  ])(
    "Ensure all test cases return correct car value",
    (testCase, carInfo, result) => {
      test(`Test case should check ${testCase}`, () => {
        expect(carValueCalculator(carInfo)).toEqual(result);
      });
    }
  );
});
