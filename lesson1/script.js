// ctr alt N/M
// FILTER
const animals = [
    { name: "Flufkyins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" },
]

const dogs = animals.filter((animal) => animal.species === "dog");

console.log(dogs);