// array 1:
let arr = [10, 20, 30, 40];
console.log(arr); // print the array
console.log(arr[0]); // print element at specific endex // output: 10
console.log(arr[1]); // ouput : 20
console.log(arr.length); // print the length of array // ouput : 4

// basic interation using for loop
for ( let i= 0; i < arr.length; i++){
    console.log(arr[i]);
    
}
// print array using loop all element in array
// // ouput: 10
// 20
// 30
// 40


/// for....... of loop
// give direct values
for ( let value of arr){
    console.log(value);
}
//ouput:
// 10
// 20
// 30
// 40

arr.push(50); 
//1. push(): add element at end in array
console.log(arr); // ouput: [ 10, 20, 30,40,50]

arr.pop() 
//2. pop(): remove element from end in array
console.log(arr); // ouput: [10, 20, 30, 40]

arr.shift();
//3. shift(): remove element from starting in array
console.log(arr); // ouput: [20, 30, 40]

arr.unshift(90); 
//4. unshift(): add element at beginning of array
console.log(arr); // ouput : [ 90,20,30,40]

//5. splice(): 
// tool used in array to modify element in array by replacing, removing or adding new element in array
// directly muted the original array
// syntax: arr.splice(start, deleteCount, intem1, item2)
// start: The zero-based index at which to start changing the array. A negative index counts back from the end of the array.
// deleteCount(optional):The number of elements to remove. If omitted or larger than the remaining elements, it deletes everything until the end of the array 
// item1, item2, ... (Optional): The elements to add starting at the start index.


//6. arr.splice(1, 2, 100, 200); // output [ 90, 100,200]
arr.splice(0,4, 100,200,300,400) // ouput : [100, 200, 300, 400]
console.log(arr); // output 



// array: 2


let num =[1, 2, 3, 4, 5]; 
//7. arr.slice(start, end):
// extracts a section of an array or string and returns it as a new object without modifying the original
console.log(num.slice(2,4)); // ouput: [3, 4]
console.log(num.slice(1,4)); // ouput: [2, 3, 4]
console.log(num.slice(2,5)); // ouput: [3,4,5]
console.log(num.slice(0,5)); // output: [1,2,3,4,5]

//8. indexOf(): 
// returns the first index of an element in an arry
// returns -1 if not fount
console.log(num.indexOf(4)); // ouput : 3
console.log(num.indexOf(100)); // -1

//9. includes()
// check if the velue is present
// returns true or false
console.log(num.includes(4)); // true
console.log(num.includes(100)); // false


//10. concat():
// merges arrays or add elements in array( does not change original array )

let merged = num.concat([6,7,8,9]);
console.log(merged); // outpu: [ 1,2,3,4,5,6,7,8,9]

//11. reverse(): reverse the original array
console.log(num.reverse()); // ouput: [5,4,3,2,1]




// array 3
// shallow coppy : 
// creates a new object or array that copies the top-level properties of the original, but shares references for any nested objects or arrays
let original =[[1], [2]];
let shallow =[...original];
shallow[0][0] = 99;
console.log(original); // ouput: [[99], [2]]

// deep copy :
// fully independent copy of array

let deep= structuredClone(original);
deep[0][0]= 500;
console.log(original);
console.log(deep); // ouput : [[500], [2]]

// spread operator
// expand element in array 

let spreadArr = num;
console.log(...spreadArr); // ouput : 1 2 3 4 5


// const with array
// array elements can be change but variable reference can not

let constArr = num;

constArr.push(10);
console.log(constArr); // ouput: 1, 2, 3, 4, 5, 10

// Array distruction
// extract values into variable.
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;
console.log(c1); // ouput: red
console.log(c2); // ouput: green

// Array.flat():
// flattens the nested array

let nestedArray= [ [ 2, 4, [ 5, 6]], 1]
console.log(nestedArray.flat()); // output: [ 2, 4, [ 5, 6 ], 1 ]
console.log(nestedArray.flat(1));// output: [ 2, 4, [ 5, 6 ], 1 ]
console.log(nestedArray.flat(2));// ouput: [ 2, 4, 5, 6, 1 ]

