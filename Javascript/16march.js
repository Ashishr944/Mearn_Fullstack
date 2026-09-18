//// Array Methods(functions)


////push(): adds one or more element at the end of the array and return the new length
//let fruits = ["apple", "banana"];
//syntax for push()
// array push(<element you want to push>)
// fruits.push("chikoo");
// console.log(fruits);   // [ 'apple', 'banana', 'chikoo' ]
// // returneedValue is the new lenght of the array
// let returnedValue = fruits.push("orange");
// console.log("returnedValue", returnedValue); // 4
// console.log(fruits);


// let name = [];
// name.push("name1", "name2", "name3");
// console.log(name);



// task add the element from fruits1 to fruits2 using for loop and push() method
// let fruits1 = ["apple", "banana", "chikoo", "orange"];
// let fruits2 =[];

// for(let i=0; i<fruits1.length; i++){
//     fruits2.push(fruits1[i]);
// }
// console.log(fruits2);




// task2 :  make an array function that takes an empty array as an input and adds enven numbers from 1 to 10
// let arr = [];
// function addEvenNumbers(arr){
//     for(let i=1; i<=10; i++){
//         if(i % 2 === 0){
//             arr.push(i);
//         }
//     }
// }
// addEvenNumbers(arr);
// console.log(arr); 


////**pop(): removes the last element from the array 

// let arr = [ 1, 2, 3, 4, 5];
// // pop returns the poped element
// let result = arr.pop();
// console.log(arr);


//task you are given an array [1, 2, 3, 4, 5] create 2 function
// 1st function is called removedLastElement -> removes the last element of the array
/// and works only if there are elements in the array
// 2nd is undo function which undos only the revious action
let arr = [1, 2, 3, 4, 5];
// function removedLastElement(arr){
//     if(arr.length > 0){
//         return arr.pop();
//     }else{
//         console.log("Array is empty");
//     }
// }
// let removedElement = removedLastElement(arr);
// console.log("Removed Element:", removedElement);
// console.log("Array after removing last element:", arr);

// let undoneElement = removedLastElement(arr);
// console.log("Undone Element:", undoneElement);
// function undo(){
//     if(removedElement !== undefined){
//         arr.push(removedElement);
//         console.log("Undo successful. Array after undo:", arr);
//     }else{
//         console.log("No action to undo.");
//     }
// }
// undo();

// for multiple undo to remove elements and the undo them till the array is empty
// let undoneElements = [];
// function removedLastElement(arr){
//     if(arr.length > 0){
//         let removedElement = arr.pop();
//         undoneElements.push(removedElement);
//         return removedElement;
//     }else{
//         console.log("Array is empty");
//     }
// }
// function undo(){
//     if(undoneElements.length > 0){
//         let undoneElement = undoneElements.pop();
//         arr.push(undoneElement);
//         console.log("Undo successful. Array after undo:", arr);
//     }else{
//         console.log("No action to undo.");
//     }
// }

// // Example usage:
// removedLastElement(arr);
// console.log("Array after removing last element:", arr);
// undo();
// undo();
// undo();
// undo();
// undo();
// undo(); // This will show "No action to undo." since the array is empty 


//**3)shift()


// removes the first element from the array and return the removed element

// let arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);

// 4)unshift()
// adds one or more element at the beginning of the array and return the new length
let arr2 = [1, 2, 3, 4, 5];
arr2.unshift(0);
console.log(arr2);