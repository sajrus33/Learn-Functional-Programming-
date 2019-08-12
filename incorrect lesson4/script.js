

const fs = require("fs");

const output = fs.readFileSync("data.txt", "utf8")
    .trim()
    .split("\n")
    .map(line => line.split("\r"))
    .reduce((customers, line) => {
        customers[line[0]] = []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[4]
        })
        return customers
    }, {});

console.log(output);