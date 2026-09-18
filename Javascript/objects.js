// object 1
// object literals
let person = { name :"Ashish",
    age : 23,
    greet: function(){
        return "Hello"}
};
console.log(person.name); // Ashish
console.log(person.greet()); // Hello
// Dot notation : the most common and readable way to access, modify, or add properties to a JavaScript object
console.log(person.age); // 23
// Bracket Notation: a method for accessing and modifying JavaScript object properties using square brackets
console.log(person["name"]); // Ashish


// Dynamic key: where the key name is stored in a variable
let key = "City";
person[key] = "Pune";
console.log(person.City) // Pune

// Adding property: 
person.country = "India";
console.log(person.country); // India

// Deleting property
delete person.age;
console.log(person); 
// {
//   name: 'Ashish',
//   greet: [Function: greet],
//   City: 'Pune',
//   country: 'India'
// }

// Object.keys(): a unique identifier used to access a value within an object
console.log(Object.keys(person)); // [ 'name', 'greet', 'City', 'country' ]
person.age = 23;
console.log(Object.keys(person)); // [ 'name', 'greet', 'City', 'country', 'age' ]

// Bracket notation: used for dynamic key
console.log(person["name"]); // Ashish

// Object.value(): the data assigned to a specific key within a JavaScript object
console.log(Object.values(person)); // [ 'Ashish', [Function: greet], 'Pune', 'India', 23 ]






// Object 2 - Nested Object
let student ={ name : "Rahul", address: { city : "Pune", Pin: 342342, state: "Maharashtra"}};
console.log(student.address.city); // Pune
console.log(student); 
//{
//   name: 'Rahul',
//   address: { city: 'Pune', Pin: 342342, state: 'Maharashtra' }
// }
console.log(student.address.state); // Maharashtra





// Array of Object : a data structure used to store a collection of items where each item is an object
let user = [ { name: "Ashish", age: 23},
    {name: "Rahul", age: 34}
];
console.log(user[1]); // { name: 'Rahul', age: 34 }
console.log(user[0].name) // Ashish


// Object Distruction: Object destructuring provides a concise way to access properties without repetitive dot notation
// let {name} = student;
// console.log(name); // Rahul

let {name} = person;
console.log(name); // Ashish
