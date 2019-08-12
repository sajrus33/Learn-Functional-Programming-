// Reduce
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];
// sum is the second parameter of reduce() and passed to it as a first argument
const totalAmount = orders.reduce((sum, order) => {
    console.log("hello", sum, order);
    return sum + order.amount;
}, 0);