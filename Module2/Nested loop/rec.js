// Recursion: A function calling it self to solve smaller version of itself
// base case: a condition to stop recursion
// recursive case: function calling itself with smaller input

// #// Best Case and Worst Case in Recursion
// Unlike algorithms such as Binary Search, recursion itself does not have a fixed best or worst case. The complexity depends on what the recursive function is doing.

// General Rule
// Best Case: The recursion stops immediately (base case is reached early).
// Worst Case: The recursion makes the maximum number of recursive calls before reaching the base case.

// ************************************************************************************* */
// Binary search:
// Instead of checking every element (like Linear Search), Binary Search repeatedly divides the search space in half.
// Algorithm
// Find middle element.
// If middle == target → Found.
// If target < middle → Search left half.
// If target > middle → Search right half.
// Repeat until found or search space becomes empty.

// 1) Iterative Binary Search
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         if (target < arr[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// }
// const arr = [2,5,8,12,16,23,38,56];
// console.log(binarySearch(arr,23));
// Output: 5

// 2) Recursive Binary Search
// function binarySearch(arr, left, right, target) {
//     if (left > right) {
//         return -1;
//     }
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//         return mid;
//     }
//     if (target < arr[mid]) {
//         return binarySearch(arr, left, mid - 1, target);
//     }
//     return binarySearch(arr, mid + 1, right, target);
// }
// const arr = [2,5,8,12,16,23,38,56];
// console.log(binarySearch(arr,0,arr.length-1,23));
// Output : 5

// # // Best Case and Worst Case in Binary Search
// Binary Search works by repeatedly dividing the search space in half. Because of this, its time complexity is very efficient.
// Best Case: O(1)
// The best case occurs when the target element is exactly the middle element of the array on the first comparison.
// Example
// let arr = [2, 5, 8, 12, 16, 23, 38];
// Target = 12
// Initial values:
// left = 0
// right = 6
// mid = (0 + 6) / 2 = 3
// arr[mid] = 12
// Since the target is found immediately:
// Only 1 comparison
// Time Complexity: O(1)
// Worst Case: O(log n)
// The worst case occurs when:
// The target is at the beginning or end of the array, or
// The target is not present in the array.
// In each step, Binary Search eliminates half of the remaining elements.
// Example 1: Target is Present
// let arr = [2,5,8,12,16,23,38];
// Target = 38
// ********************************************************************************************* */

// * // MAP and SET:
// 1// What is Map?
// A Map stores key-value pairs.
// Unlike objects:
// Keys can be any data type.
// Maintains insertion order.
// Better performance for frequent additions/removals.

// Syntax
// const map = new Map();


// #// Methods in MAP:

// 1. set()
// Purpose: Adds or updates a key-value pair.
// const map = new Map();
// // Add key-value pairs
// map.set("name", "Ashu");
// map.set("age", 22);
// console.log(map);
// // Map(2) {
// //   "name" => "Ashu",
// //   "age" => 22
// // }

// 2. get()
// Purpose: Returns the value for a given key.
// const map = new Map();
// map.set("name", "Ashu");
// // Get value using key
// console.log(map.get("name")); // Ashu

// 3. has()
// Purpose: Checks if a key exists.
// const map = new Map();
// map.set("city", "Pune");
// // Key exists
// console.log(map.has("city")); // true
// // Key doesn't exist
// console.log(map.has("country")); // false


// 4. delete()
// Purpose: Removes a key-value pair.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // Delete age
// map.delete("age");
// console.log(map);
// // Map(1) {
// //   "name" => "Ashu"
// // }


// 5. clear()
// Purpose: Removes all key-value pairs.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // Remove all entries
// map.clear();
// console.log(map); // Map(0) {}

// 6. size
// Purpose: Returns the number of key-value pairs.
// const map = new Map();
// map.set("A", 10);
// map.set("B", 20);
// // Total entries
// console.log(map.size); // 2

// 7. keys()
// Purpose: Returns all keys.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // Print all keys
// for (const key of map.keys()) {
//     console.log(key);
// }
// Output
// name
// age

// 8. values()
// Purpose: Returns all values.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // Print all values
// for (const value of map.values()) {
//     console.log(value);
// }
// Output
// Ashu
// 22

// 9. entries()
// Purpose: Returns [key, value] pairs.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // Print key-value pairs
// for (const [key, value] of map.entries()) {
//     console.log(key, value);
// }
// Output
// name Ashu
// age 22

// 10. forEach()
// Purpose: Iterates through every key-value pair.
// const map = new Map();
// map.set("name", "Ashu");
// map.set("age", 22);
// // value comes first, then key
// map.forEach((value, key) => {
//     console.log(key, value);
// });
// Output
// name Ashu
// age 22
// Difference Between Map.forEach() and Set.forEach()

// Set
// const set = new Set([10, 20]);
// // In Set, both parameters are the value
// set.forEach((value, key) => {
//     console.log(value, key);
// });
// Output
// 10 10
// 20 20


// Map
// const map = new Map();
// map.set("A", 10);
// map.set("B", 20);
// // In Map, first parameter is value, second is key
// map.forEach((value, key) => {
//     console.log(key, value);
// });
// Output
// A 10
// B 20
// ..................................................................................................................................................................
// 2// What is Set?
// A Set is a collection of unique values.
// Stores only unique elements.
// Duplicate values are automatically removed.
// Maintains insertion order.

// Syntax:
// const set = new Set();



// #// Mehods in as set: 
// 1. add()
// Purpose: Adds a new value to the Set.
// const set = new Set();
// // Add values
// set.add(10);
// set.add(20);
// set.add(30);
// console.log(set); // Set(3) {10, 20, 30}

// 2. has()
// Purpose: Checks whether a value exists in the Set.
// const set = new Set([10, 20, 30]);
// // Returns true because 20 exists
// console.log(set.has(20)); // true
// // Returns false because 50 doesn't exist
// console.log(set.has(50)); // false

// 3. delete()
// Purpose: Removes a value from the Set.
// const set = new Set([10, 20, 30]);
// // Delete 20
// set.delete(20);
// console.log(set); // Set(2) {10, 30}

// 4. clear()
// Purpose: Removes all values from the Set.
// const set = new Set([10, 20, 30]);
// // Remove everything
// set.clear();
// console.log(set); // Set(0) {}

// 5. size
// Purpose: Returns the total number of elements.
// const set = new Set([10, 20, 30]);
// // Number of elements
// console.log(set.size); // 3

// 6. values()
// Purpose: Returns an iterator of all values.
// const set = new Set([10, 20, 30]);
// // Print every value
// for (const value of set.values()) {
//     console.log(value);
// }
// Output
// 10
// 20
// 30

// 7. keys()
// Purpose: In a Set, keys() is the same as values().
// const set = new Set([10, 20, 30]);
// for (const key of set.keys()) {
//     console.log(key);
// }
// Output
// 10
// 20
// 30

// 8. entries()
// Purpose: Returns [value, value] pairs because Set has no separate keys.
// const set = new Set([10, 20]);
// for (const entry of set.entries()) {
//     console.log(entry);
// }
// Output
// [10, 10]
// [20, 20]


// 9. forEach()
// Purpose: Loops through every value.
// const set = new Set([10, 20, 30]);
// set.forEach((value) => {
//     console.log(value);
// });
// Output
// 10
// 20
// 30
// **************************************************************************************************************************** */

// Sorting Algorithm:
// 1. Bubble Sort
// Idea
// Compare two adjacent elements and swap them if they are in the wrong order.
// The largest element "bubbles" to the end after each pass.

// Example
// 5 3 8 4 2
// ↓
// 3 5 8 4 2
// ↓
// 3 5 4 8 2
// ↓
// 3 5 4 2 8

// Code:
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let swapped = false; // Track whether any swap happened
//         for (let j = 0; j < n - 1 - i; j++) {
//             // Swap if left element is greater than right element
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapped = true;
//             }
//         }
//         // Array is already sorted
//         if (!swapped) break;
//     }
//     return arr;
// }
// console.log(bubbleSort([5,3,8,4,2]));

// Output
// [2,3,4,5,8]

// Time Complexity
// Case	Complexity
// Best	O(n)
// Average	O(n²)
// Worst	O(n²)
// Best Case
// Already sorted array.
// 1 2 3 4 5
// No swaps occur.
// Worst Case
// Reverse sorted array.
// 5 4 3 2 1
// Maximum swaps.
// .....................................................................................................................................................................
// 2. Selection Sort
// Idea
// Find the smallest element and place it at the beginning.
// 5 3 8 4 2
// ↓
// 2 3 8 4 5
// ↓
// 2 3 8 4 5
// ↓
// 2 3 4 8 5

// Code
// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let min = i;
//         // Find the smallest element
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         // Swap smallest with current position
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//     return arr;
// }
// console.log(selectionSort([5,3,8,4,2]));
// Time Complexity
// Case	Complexity
// Best	O(n²)
// Average	O(n²)
// Worst	O(n²)

// Reason: It always scans the remaining array to find the minimum element.
// ......................................................................................................................................................................
// 3. Insertion Sort
// Idea
// Take one element and insert it into its correct position among the already sorted part.
// 5
// 3 5
// 3 5 8
// 3 4 5 8
// 2 3 4 5 8

// Code
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         let j = i - 1;
//         // Shift larger elements one position to the right
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         // Insert current element
//         arr[j + 1] = current;
//     }
//     return arr;
// }

// console.log(insertionSort([5,3,8,4,2]));
// Time Complexity
// Case	Complexity
// Best	O(n)
// Average	O(n²)
// Worst	O(n²)
// Best Case

// Already sorted.
// 1 2 3 4 5
// Only comparisons.
// Worst Case
// Reverse sorted.
// 5 4 3 2 1
// Every element shifts.

// ......................................................................................................................................................................

// 4. Merge Sort
// Idea
// Divide the array into two halves until one element remains.
// Then merge the sorted halves.
// 8 3 5 1
// ↓
// 8 3
// 5 1
// ↓
// 8
// 3
// 5
// 1
// ↓
// 3 8
// 1 5
// ↓
// 1 3 5 8

// Code
// function merge(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     // Merge two sorted arrays
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
//     return result
//         .concat(left.slice(i))
//         .concat(right.slice(j));
// }
// function mergeSort(arr) {
//     // Base case
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// console.log(mergeSort([5,3,8,4,2]));


// Time Complexity
// Case	Complexity
// Best	O(n log n)
// Average	O(n log n)
// Worst	O(n log n)

// Space Complexity
// O(n)

// ......................................................................................................................................................................

// 5. Quick Sort
// Idea
// Choose a pivot.
// Move smaller elements to the left.
// Move larger elements to the right.
// Repeat recursively.
// Example
// 5 3 8 4 2
// Pivot = 5
// ↓
// 3 4 2
// 5
// 8
// ↓
// 2 3 4
// 5
// 8

// Code
// function quickSort(arr) {
//     // Base case
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // Choose last element as pivot
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     // Partition the array
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     // Recursively sort left and right
//     return [
//         ...quickSort(left),
//         pivot,
//         ...quickSort(right)
//     ];
// }
// console.log(quickSort([5,3,8,4,2]));

// Time Complexity
// Case	Complexity
// Best	O(n log n)
// Average	O(n log n)
// Worst	O(n²)
// Best Case
// Pivot always divides the array into two equal halves.
// 8
// ↓
// 4 4
// ↓
// 2 2 2 2

// Worst Case
// Pivot is always the smallest or largest element.
// Example
// 1 2 3 4 5
// or
// 5 4 3 2 1
// The recursion becomes linear.

// ******************************************************************************************************************************** */
// Callback and higher order function:
// A callback function is a function that is passed as an argument to another function and is executed later.

// Syntax
// function higherOrder(callback) {
//     callback();
// }
// Here,
// callback → Function passed as an argument.
// higherOrder() → Function receiving the callback.

// Example 1 (Basic)
// // Callback function
// function greet() {
//     console.log("Hello Ashu");
// }
// // Higher Order Function
// function welcome(callback) {
//     console.log("Welcome!");
//     // Execute callback function
//     callback();
// }
// // Pass greet as callback
// welcome(greet);

// Output
// Welcome!
// Hello Ashu

// Explanation
// welcome(greet)
// ↓
// callback = greet
// ↓
// callback()
// ↓
// greet()
// ↓
// Hello Ashu
// ......................................................................................................................................................................
// Higher Order Function (HOF)
// Definition
// A Higher Order Function is a function that:
// Takes another function as an argument, OR  Returns another function.

// Examples
// map()
// filter()
// reduce()
// setTimeout()
// addEventListener()
// All are Higher Order Functions.

// Creating Your Own Higher Order Function

// Example 1
// function execute(operation, a, b) {
//     // Execute the callback
//     return operation(a, b);
// }
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// console.log(execute(add, 10, 5));
// console.log(execute(subtract, 10, 5));
// Output
// 15
// 5
// ......................................................................................................................................................................
// Closure
// What is Closure?
// A closure is created when an inner function remembers variables from its outer function, even after the outer function has finished executing.

// Example
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();
// counter();

// Output
// 1
// 2
// 3

// Dry Run
// Step 1
// const counter = outer();
// Memory
// outer()
// count = 0
// return inner
// Although outer() finishes, count remains in memory because inner references it.

// Step 2
// counter();
// count = 1
// Step 3
// counter();
// count = 2
// Step 4
// counter();
// count = 3

// This is a closure.

// Closure with Callback
// This is one of the most common interview questions.

// Example
// function greet(name){
//     // Return callback
//     return function(){
//         console.log("Hello " + name);
//     };
// }
// const callback = greet("Ashu");
// // Execute later
// callback();

// Output
// Hello Ashu


// Explanation
// greet("Ashu")
// ↓
// name = "Ashu"
// ↓
// return function
// ↓
// greet() finishes
// ↓
// callback()
// ↓

// Inner function still remembers
// name = "Ashu"
// This is a closure because the returned function remembers the outer variable name.

// Closure with setTimeout (Interview Favorite)

// function delayedMessage(message){
//     setTimeout(function(){
//         console.log(message);
//     },2000);
// }
// delayedMessage("Hello");
// Output (after 2 seconds)
// Hello
// Why?
// Even though delayedMessage() has already finished, the callback passed to setTimeout still has access to the message variable because of a closure.

// Real-Life Example
// function bankAccount(balance){
//     return {
//         deposit(amount){
//             balance += amount;
//             console.log(balance);
//         },
//         withdraw(amount){
//             balance -= amount;
//             console.log(balance);
//         }
//     };
// }
// const account = bankAccount(1000);
// account.deposit(500);
// account.withdraw(200);

// Output
// 1500
// 1300

// Why is this a Closure?
// The methods deposit and withdraw continue to access and modify the balance variable even after bankAccount() has finished executing.

// Callback + Closure Together
// function processUser(name, callback){
//     // Callback closes over the `name` variable
//     callback(name);
// }
// processUser("Ashu", function(user){
//     console.log("Welcome " + user);
// });

// Output
// Welcome Ashu

// Here:
// processUser() is the Higher Order Function.
// The anonymous function is the Callback Function.
// The callback forms a Closure over the user parameter when it executes.
//*************************************************************************************************************************************************************** */
// 1. map()
// Definition

// map() creates a new array by transforming every element of the original array.

// Returns a new array.
// Original array is not modified.
// Output array has the same length as the input array.

// Syntax
// array.map((element, index, array) => {
//     return newValue;
// });

// Example 1: Double Every Number
// const numbers = [1, 2, 3, 4, 5];

// // Multiply each element by 2
// const result = numbers.map((num) => {
//     return num * 2;
// });
// console.log(result);

// Output
// [2, 4, 6, 8, 10]

// Dry Run
// | Element | Return | Result       |
// | ------- | ------ | ------------ |
// | 1       | 2      | [2]          |
// | 2       | 4      | [2,4]        |
// | 3       | 6      | [2,4,6]      |
// | 4       | 8      | [2,4,6,8]    |
// | 5       | 10     | [2,4,6,8,10] |

// Example 2: Square Numbers
// const numbers = [2, 3, 4];
// const squares = numbers.map((num) => {
//     return num * num;
// });
// console.log(squares);

// Output
// [4, 9, 16]

// Example 3: Objects
// const users = [
//     { name: "Ashu", age: 22 },
//     { name: "Raj", age: 25 },
//     { name: "Amit", age: 30 }
// ];
// // Get only names
// const names = users.map((user) => {
//     return user.name;
// });
// console.log(names);

// Output
// ["Ashu", "Raj", "Amit"]


// // ......................................................................................................................................................................
// 2. filter()
// Definition:
// filter() returns a new array containing only the elements that satisfy a condition.

// Returns a new array.
// Original array remains unchanged.
// Output length may be smaller.

// Syntax
// array.filter((element, index, array) => {
//     return condition;
// });

// If callback returns
// true

// Keep the element.

// If callback returns
// false

// Ignore the element.

// Example 1: Even Numbers
// const numbers = [1,2,3,4,5,6];
// const even = numbers.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(even);

// Output
// [2,4,6]


// dry run:
// | Number | Condition | Result |
// | ------ | --------- | ------ |
// | 1      | false     | ❌      |
// | 2      | true      | 2      |
// | 3      | false     | ❌      |
// | 4      | true      | 2,4    |
// | 5      | false     | ❌      |
// | 6      | true      | 2,4,6  |


// Example 2: Age > 25
// const users = [
//     {name:"Ashu",age:22},
//     {name:"Raj",age:28},
//     {name:"Amit",age:30}
// ];
// const adults = users.filter((user)=>{
//     return user.age > 25;
// });
// console.log(adults);
// Output
// [
//  {name:"Raj",age:28},
//  {name:"Amit",age:30}
// ]

// // ......................................................................................................................................................................
// 3. reduce()
// Definition
// reduce() reduces the entire array to a single value.

// Examples:
// Sum
// Maximum
// Minimum
// Frequency Count
// Object
// String

// Syntax
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

// Example 1: Sum
// const numbers = [1,2,3,4,5];
// const total = numbers.reduce((sum,num)=>{
//     return sum + num;
// },0);
// console.log(total);
// Output
// 15


// Dry run:
// | sum | num | Return |
// | --- | --- | ------ |
// | 0   | 1   | 1      |
// | 1   | 2   | 3      |
// | 3   | 3   | 6      |
// | 6   | 4   | 10     |
// | 10  | 5   | 15     |


// Example 2: Maximum
// const numbers = [10,5,25,18];
// const max = numbers.reduce((largest,num)=>{
//     return Math.max(largest,num);
// },numbers[0]);
// console.log(max);

// Output
// 25

// Example 3: Count Frequency
// const arr = ["A","B","A","C","A","B"];
// const frequency = arr.reduce((acc,item)=>{
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
// },{});
// console.log(frequency);
// Output
// {
//  A:3,
//  B:2,
//  C:1
// }


// // ......................................................................................................................................................................
// Chaining map + filter + reduce

// const numbers = [1,2,3,4,5,6];
// const result = numbers
// .filter((num)=>num%2===0)
// .map((num)=>num*10)
// .reduce((sum,num)=>sum+num,0);
// console.log(result);

// Step 1
// [1,2,3,4,5,6]
// ↓
// Filter
// [2,4,6]
// ↓
// Map
// [20,40,60]
// ↓
// Reduce
// 120

// Output
// 120

// Create Your Own map()
// function myMap(arr, callback){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }
// const output = myMap([1,2,3],function(num){
//     return num*2;
// });
// console.log(output);

// Create Your Own filter()
// function myFilter(arr, callback){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i], i, arr)){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(
// myFilter([1,2,3,4],num=>num%2===0)
// );


// Create Your Own reduce()

// function myReduce(arr, callback, initialValue){
//     let accumulator = initialValue;
//     for(let i=0;i<arr.length;i++){
//         accumulator = callback(accumulator, arr[i]);
//     }
//     return accumulator;
// }
// const total = myReduce([1,2,3],(sum,num)=>{
//     return sum+num;
// },0);
// console.log(total);
// // ......................................................................................................................................................................
// Time Complexity:

// | Method   | Time | Space |
// | -------- | ---- | ----- |
// | map()    | O(n) | O(n)  |
// | filter() | O(n) | O(n)  |
// | reduce() | O(n) | O(1)* |


// Difference Between map(), filter(), and reduce()

// | Feature        | map()              | filter()        | reduce()                                 |
// | -------------- | ------------------ | --------------- | ---------------------------------------- |
// | Returns        | New array          | New array       | Single value (or any accumulated result) |
// | Array Size     | Same               | Smaller or same | Not applicable                           |
// | Purpose        | Transform elements | Select elements | Combine elements                         |
// | Original Array | Not modified       | Not modified    | Not modified                             |


//*************************************************************************************************************************************************************** */
// // 1 print no from n to 1
// function countDown(n){
//     if(n === 0){
//         return;
//     }

//     console.log(n);
//     return countDown(n -1);
// }
// console.log(countDown(6));


// 2. count 1 to n
// function count(n){
//     if(n === 0) return 0;

//     count(n-1);

//     console.log(n);
// }
// console.log(count(6));


// 3. factorial 
// function fact(n){
//     if(n === 0 || n === 1){
//         return 1;
//     }

//     return n * fact(n -1);
// }
// console.log(fact(5)); // 120


// 4. sun of number till n

// function sum(n){
//     if(n === 0){
//         return 0;
//     }

//     return n + sum(n -1);
// }
// console.log(sum(10)); // 55


//5. Power function
// function power(a,b){
//     if(b === 0){
//         return 1;
//     }
//     return a * power(a, b -1);
// }
// console.log(power(2,3)); // 8
rr
// 6. Reverse String
// function reverse(str){
//     if(str.length === 0){
//         return "";
//     }
//     return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("APPLE")); //ELPPA


// // Palindrome
// function palindrome(str, start =0, end= str.length -1){
//     if(start >= end){
//         return true;
//     }

//     if(str[start] != str[end] )return false;

//     return palindrome(str, start + 1, end -1);
// }
// console.log(palindrome("MADAM")); // true



// 9. sum of array
// function sumArr(arr,index =0){
//     if(index === arr.length){
//         return 0;
//     }
//     return arr[index] + sumArr(arr, index +1);
// }
// console.log(sumArr([1,2,3,4,5,6])) // 21


// 10 find max in array
// function maxArr(arr, index =0){
//     if(index === arr.length-1){
//         return arr[index];

//     }

//     return Math.max(arr[index], maxArr(arr, index +1));
// }
// console.log(maxArr([12,4,5,2,4,31,42,0])); // 42;


// 11. Binary search using recursion
// function binarySearch(arr,left, right, target){
//     if( left > right){
//         return -1;
//     }

//     let mid = Math.floor((left+right) /2);

//     if(arr[mid] === target){
//         return mid;
//     }

//     if(target < arr[mid]){
//         return binarySearch(arr, left, mid -1, target);
//     }

//     return binarySearch(arr, mid+1, right, target);
// }

// let arr= [1,2,3,4,5,6,7];
// console.log(binarySearch(arr,0,arr.length -1, 4));  // 3



// 12. count digit
// function countDigit(n){
//     if(n ===0 ){
//         return 0;
//     }
//     return 1 + countDigit(Math.floor(n/10));
// }
// console.log(countDigit(12343234)); // 8



// // 13 sum of no digit
// function sumDigit(n){
//     if(n === 0){
//         return 0;
//     }

//     return n % 10 + sumDigit(Math.floor(n/10));
// }
// console.log(sumDigit(1234532)); // 20



// 14. print subset
// function subSet(arr, index =0, current= []){
//     if(index === arr.length){
//         console.log(current);
//         return;
//     }

//     current.push(arr[index]);
//     subSet(arr, index +1, current);

//     current.pop();
//     subSet(arr, index+1, current);
// }
// subSet([1,2,3,4]);

// ouput:
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3 ]
// [ 1, 2, 4 ]
// [ 1, 2 ]
// [ 1, 3, 4 ]
// [ 1, 3 ]
// [ 1, 4 ]
// [ 1 ]
// [ 2, 3, 4 ]
// [ 2, 3 ]
// [ 2, 4 ]
// [ 2 ]
// [ 3, 4 ]
// [ 3 ]
// [ 4 ]
// []




// function count(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     count(n -1);
// }
// count(6);

// function count(n){
//     if(n === 0){
//         return;
//     }
//     count(n -1);
//     console.log(n);
// }
// count(6);


// function sum(n){
//     if(n === 0){
//         return 0;
//     }
//     return n + sum(n -1);
// }
// console.log(sum(10));


// function fact(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * fact(n -1);
// }
// console.log(fact(6));


// function fact(a,b){
//     if(b === 0){
//         return 1;
//     }
    
//     return a * fact(a, b-1);
// }
// console.log(fact(2,4));


// function reverse(str){
//     if(str.length === 0){
//         return "";
//     }
    
//     return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("APPLE"));


// function fab(n){
//     if(n <= 1)
//     return n;
    
//     return fab(n -1) + fab(n -2);
// }
// console.log(fab(6));


// function max(arr, index){
//     if(index === arr.length -1){
//         return arr[index];
//     }
    
//     return Math.max(arr[index], max(arr, index + 1));
// }
// let arr = [ 2,34,5,2,5,234];
// console.log(max(arr, 0));

// function min(arr, index){
//     if(index === arr.length -1){
//         return arr[index];
//     }
    
//     return Math.min(arr[index], min(arr, index + 1));
// }
// let arr = [ 2,34,5,2,5,234];
// console.log(min(arr, 0));


// function countEven(arr, index = 0){
//     if(arr.length === index){
//         return 0;
//     }
    
//     if(arr[index] % 2=== 0){
//         return 1 + countEven(arr, index + 1);
//     }
//     return countEven(arr, index + 1);
// }
// let arr = [ 2,34,5,2,5,234];
// console.log(countEven(arr));


// function countOdd(arr, index =0){
//     if(arr.length === index){
//         return 0;
//     }
    
//     if(arr[index] %2 !== 0){
//         return 1 + countOdd(arr, index +1);
//     }
//     return countOdd(arr, index +1);
// }
// let arr = [ 2,34,5,2,5,234];
// console.log(countOdd(arr));





