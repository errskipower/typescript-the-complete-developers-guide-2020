const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// what do these numbers mean to you? nothing.
const carSpecs: [number, number] = [400, 3354];
// it's immediately obvious what we're working with
const carStats = {
  horsepower: 400,
  weight: 3354,
};
