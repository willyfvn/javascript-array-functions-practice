const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names

function getNames(): string[] {
  return characters.map((personagem) => personagem.name);
}

//2. Get array of all heights
function getHeights(): number[] {
  return characters.map((character) => character.height);
}

//3. Get array of objects with just name and height properties
function getheightsAndNames() {
  return characters.map((character) => {
    return {
      name: character.name,
      height: character.height,
    };
  });
}
//4. Get array of all first names

function createNewObject() {
  return characters
    .filter((character) => character.gender != "female" && character.mass > 80)
    .map((character) => ({
      name: character.name,
      altura: character.height,
    }));
}

function eyeColorsCount() {
  return characters.reduce(
    (sum, curr) => {
      if (curr.eye_color === "brown") {
        sum.marrom++;
      }
      if (curr.eye_color === "yellow") {
        sum.yellow++;
      }
      if (curr.eye_color === "blue") {
        sum.blue++;
      }
      return sum;
    },
    { blue: 0, yellow: 0, marrom: 0 }
  );
}

const countGenders = () => {
  return characters.reduce(
    (sum, curr) => {
      if (curr.gender === "male") {
        sum.males++;
      } else {
        sum.females++;
      }

      return sum;
    },
    {
      males: 0,
      females: 0,
    }
  );
};

console.log(countGenders());

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?// ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]
