// destructing
const player = {
    age: 24,
    name: "john"
}
// here
const { age, name } = player;
console.log(age, name);

const players = ["Adam", "Jospeh", "Darius"];
// here 
const [, midPlayer, goodPlayer] = players;
console.log({ goodPlayer }, { midPlayer });

// here 
const { value = "pyk default", value2 = 1000, value3 = name } = player;
console.log(value, value2, value3);

// here
const [user, ...users] = players;
const noobs = [...players];
noobs.push("joseph2")
console.log(user, users, noobs);


// rest operator
const movies = {
    "pirates": {
        title: "Pirates of the Carabara",
        cast: []
    }
}
// here
const setCast = (movies, name, ...actors) => {
    actors.forEach(actor => {
        movies[name].cast.push(actor);
    })
}
setCast(movies, "pirates", "John Wick", "John Travolta");
console.log(movies);

