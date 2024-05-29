// Function for car value calculation
const carValueCalculator = (carInfo) => {
  const model = carInfo.model;
  let year;

  year = Number(carInfo.year);

  if (!year) {
    return "Error: invalid year - not a number";
  }

  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let modelValue = 0;

  for (let char of model) {
    if (char.toLowerCase() === char.toUpperCase()) {
      continue;
    }

    const value = alphabet[char.toLowerCase()];
    modelValue += value;
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
