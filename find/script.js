const people = [
    {
        name: "Dom",
        occupation: "Software Developer"
    },
    {
        name: "Eric",
        occupation: "Dentist"
    },
    {
        name: "Kate",
        occupation: "Hair Dresser"
    },
];

const isDentist = person => person.occupation === "Dentist";
// will return first element of array only 
console.log(people.find(isDentist).name);
