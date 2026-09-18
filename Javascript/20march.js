//// creating array using constructor
// let arr = new Array();
// let fruits = new Array(" apple", "banana", "orange");

// console.log(fruits);
//// deep copy: creates completely new, independennt structure in memory, change in the copy does not affect the original array
let fruits = ["apple", "banana", "orange"];
let fruits2 = JSON.parse(JSON.stringify(fruits)); // deep copy of an array
fruits2[1] = "grapes";
console.log(fruits2);  //[ 'apple', 'grapes', 'orange' ]
console.log(fruits);  // [ 'apple', 'banana', 'orange' ]



// let fruits = ["apple", "banana", "orange"];
// //// shallow copy of an array: change in the copy effect the original array as well
// let  fruits2 = fruits;

// fruits2[1] = "grapes";
// console.log(fruits2); // [ 'apple', 'grapes', 'orange' ]
// console.log(fruits); // [ 'apple', 'grapes', 'orange' ]  // both fruits and fruits2 are pointing to the same array in memory


// let dataSend = JSON.stringify(fruits); //converting array to string
// let dataRecieved = JSON.parse(dataSend); // converting into JSON object to array
// console.log(fruits);
// console.log(dataRecieved);  
// console.log(dataSend);
