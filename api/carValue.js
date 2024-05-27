// Function for car value calculation
const carValueCalculator = (carInfo) => {
  console.log(carInfo);
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

  for (let char of carInfo.model) {
    alphabet.forEach((letter, i) => {
      if (char.toLowerCase() == letter) {
        modelValue = modelValue + i + 1;
      }
    });
  }
  // Finding the final total
  const total = modelValue * 100 + carInfo.year;
  return total;
};

module.exports = carValueCalculator;
