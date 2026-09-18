// // union()


// const A = new Set(['a','b','c']);
// const B = new Set(['b', 'c', 'd']);

// const C = A.union(B);
// console.log(C); // { 'a', 'b', 'c', 'd' }

// // A - B
// const D = A.intersection(B);
// console.log(d); // Set(2) { 'b', 'c' }



// const E = A.difference(B); 
// console.log(E); // { 'a'}



// const F = B.difference(A);
// console.log(F); // { 'd' }


// // all values of A should be inside B
// console.log(B.isSubsetof(b)) // false


// for a given string check if all characters are unique or not
// inout: "abc" -> unique string
// inout: "abcda" -> not unique string


// const str = "abc";
// const set = new Set(str);
// console.log(set);

// Method 1:
// const arr = str.split(" ");
// const set = new Set(arr);
// console.log(set); // Set(1) { 'abc' }


// // Method 2:

// if(set.size == str.length){
//     console.log("string is unque"); // string is unque
// }
// else{
//     console.log("string is not unique");
// }
// console.log(set); // Set(1) { 'abc' }


// task1
// convert the below object into Map

obj = {
    name: "Ashish", age: 20, gender : "male"
}

// Method 1
const map = new Map(Object.entries(obj))
console.log(map); // { 'name' => 'Ashish', 'age' => 20, 'gender' => 'male' }

// Method 2
const map2 = new Map();
for(let key in obj){
    map2.set(key, obj[key]);
}
console.log(map2) //  { 'name' => 'Ashish', 'age' => 20, 'gender' => 'male' }
