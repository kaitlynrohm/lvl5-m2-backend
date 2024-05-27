const { carValueCalculator } = require("../api/carValue");

describe("API 1 tests", () => {
  test.todo(
    "Test case: 'Civic', 2020. expected outcome 6600. Test description: Sunny day scenario"
  );
  test.todo(
    "Test case: '911', 2020. expected outcome 2200. Test description: Numbers only is ok"
  );
  test.todo(
    "Test case: 'Task-Force', -987. expected outcome error message. Test description: negative year"
  );
  test.todo(
    "Test case: 'C200', 'twenty twenty'. expected outcome error message. Test description: Wrong data type"
  );
});