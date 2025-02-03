// // function add(a, b) {
//     return a + b;
// }
// // 

let add=(a,b)=> a+b
console.log(add(1,2));

//create a template literals
let greet=(name,message="welcome!")=>{
    return `${name},${message}`
}
console.log(greet("Laxmi"))
// 3. Template Literals
const formatString = (name, age) => `Hello, my name is ${name} and I am ${age} years old.`;

// 4. Object Destructuring
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
const extractDetails = ({ name, city }) => `${name} lives in ${city}.`;

// 5. Rest Operator
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// 6. Filter Even Numbers
const filterEvens = (arr) => arr.filter(num => num % 2 === 0);

// 7. Array Mapping
const doubleValues = (arr) => arr.map(num => num * 2);

// 8. Find the Maximum
const findMax = (arr) => Math.max(...arr);

// 9. Object and Array Destructuring

const extractAliceDetails = (arr) => {
    const [, { name, age }] = arr;
    return `${name}’s age is ${age}.`;
};

// 10. Data Manipulation using Array functions
const transformData = (arr) => arr.map(({ id, title, rating: { rate, count } }) => ({ id, title, rate, count }));

// 11. Default Parameter
const fun = (name = "abc") => {
    if (name) {
        console.log("if", name);
    } else {
        console.log("else", name);
    }
};

// 12. Deep Clone Objects
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// 13. Flatten Nested Arrays
const flattenArray = (arr) => arr.flat();

// Test data
const data = [
    { name: "Bob", age: 24 },
    { name: "Alice", age: 21 }
];

const storeData = [{
    "id": 1,
    "title": "Fjallraven Backpack",
    "price": 109.95,
    "description": "Your perfect pack",
    "category": "men's clothing",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}];

const nestedObj = { a: 1, b: { c: 2 } };
const nestedArray = [1, [2, [3, [4, 5]]]];

// Test executions
console.log("9. Extract Alice Details:", extractAliceDetails(data));

console.log("10. Transform Data:", transformData(storeData));

console.log("11. Default Parameter Test:");
fun();          // with default
fun("");        // with empty string
fun("test");    // with value

console.log("12. Deep Clone Test:");
const clonedObj = deepClone(nestedObj);
clonedObj.b.c = 42;
console.log("Original:", nestedObj);
console.log("Cloned:", clonedObj);

console.log("13. Flatten Array:", flattenArray(nestedArray));