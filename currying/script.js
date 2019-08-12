// ussing currying by itself
function add(a) {
    let score = a;

    const addMore = (b) => {
        score = score + b;

        return addMore;
    }

    addMore.result = () => score;

    return addMore;
};

console.log('result:1', add(2)(4).result()); // 6
console.log('result:2', add(2)(4)(6).result()); // 12
console.log('result:3', add(2)(4)(6)(9).result()); // 21

// ES6 currying by itself, need to use all args :( but can do it with next funcs
const dragon =
    name =>
        size =>
            element =>
                name + " is a " +
                size + " dragon that breathes " +
                element + "!"

const karo = dragon("Karo");
const karoLarge = karo("large");
const karoLargeIce = karoLarge("ice");
const karoLargeFire = karoLarge("fire");
console.log(karoLargeIce, karoLargeFire);
// using currying with filter()

const dragons = [
    { name: "flufykins", element: "lightning" },
    { name: "noomi", element: "lightning" },
    { name: "karo", element: "fire" },
    { name: "doomer", element: "doomer" },
];
const hasProperty = (obj, objProp, prop) => obj[objProp] === prop;

const lightningDragons = dragons.filter(x => hasProperty(x, "element", "lightning"));
console.log(lightningDragons);

