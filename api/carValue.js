// Function for car value calculation
const carValueCalculator = (carInfo) => {
  console.log(carInfo);
  const model = carInfo.model;
  let year;

  year = Number(carInfo.year);

  if (!year) {
    return "Error: invalid year - not a number";
  }

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let modelValue = 0;

  for (let char of model) {
    if (char.toLowerCase() === char.toUpperCase()) {
      continue;
    }
    alphabet.forEach((letter, i) => {
      if (char.toLowerCase() == letter) {
        modelValue = modelValue + i + 1;
      }
    });
  }

  // test the year
  if (year <= 1886) {
    return "Error: invalid year - to low";
  }

  // Finding the final total
  const total = modelValue * 100 + year;
  return total;
};

module.exports = carValueCalculator;
