// MAP
//node --harmony_arrow_functions script.js

const animals = [
    { name: "Flufkyins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" },
];

const names = animals.map((animal) => animal.name);
console.log(names);

const naming = animals.map((x) => x.name + " is a " + x.species);
console.log(naming);
