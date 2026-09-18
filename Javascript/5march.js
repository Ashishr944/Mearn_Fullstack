// you are given number n and younhaven to print ifit possitive, negative or zero

//let n = 5;
// if (n > 0) {
//     console.log("Number is Positive");
// } else if (n < 0) {
//     console.log("Number is Negative");
// } else {
//     console.log("Number is Zero");
// }

// Another way to write the above code is using ternary operator
//let result =n > 0 ? "Number is Positive" : n < 0 ? "Number is Negative" : "Number is Zero";
//console.log(result);

// you are given a numbner can be decimals -> check if ther integer part is odd or even

// let num = 5;
// let n = Math.floor(num); // Get the integer part of the number
// if (n % 2 === 0) {
//     console.log("Integer part is Even");
// } else {
//     console.log("Integer part is Odd");
// }   
// Another way to write the above code is using ternary operator
//let result = n % 2 === 0 ? "Integer part is Even" : "Integer part is Odd";
//console.log(result);

// you have 3 numbers a, b and c now you have to print which one is the greatest without using logical operator
// let a = 500;
// let b = 10;
// let c = 30;
// if (a > b) {
//     if (a > c) {
//         console.log("a is greatest");
//     } else {
//         console.log("c is greatest");   
//     }
// } else {
//     if (b  > c) {
//         console.log("b is greatest");
//     } else {
//         console.log("c is greatest");
//     }
// }

// another way to write the above code is using ternary operator
// if (a > b) {
//     if (a  > c){
//         console.log("a is greatest");       
//     }
// }
// if (b > a) {
//     if (b > c) {
//         console.log("b is greatest");
//     }
// }
// if (c > a) {
//     if (c > b) {
//         console.log("c is greatest");
//     }
// }   




// Logical operators
// let a =0;
// let b = 0;
// let c = false;

// let result = b || a || c; // Output: 10 (logical OR operator)
// console.log(result);
// console.log (1 || 0); // Output: 1 (logical OR operator
// console.log(null || 2); // Output: 2 (logical OR operator)
// console.log( null ||2); // Output: 2 (logical OR operator)
// console.log(null || 0||1); // Output: 1 (logical OR operator)
// console.log(undefined || null || false); // Output: false (logical OR operator)

// let firstName = "";
// let lastName = "Rokade";
// let userName = "";
// let result = firstName || lastName || userName || "Anonymous"; // Output: "Rokade" (logical OR operator)
// console.log(result);


// true || console.log("Hello"); // Output: true (logical OR operator) short-circuit evaluation
// false || console.log("Hello2"); // Output: "Hello2" (logical OR operator) short-circuit evaluation


// console.log( true && true); // Output: true (logical AND operator)
// console.log(true && false); // Output: false (logical AND operator)
// console.log(false && true); // Output: false (logical AND operator)
// console.log(false && false); // Output: false (logical AND operator)
// console.log(true + false); // Output: 1 (logical AND operator with type coercion)


// let age =20;
// let isFemale = true;
// // using and operator to check if a person is eligible for a certain offer
// if ( age >= 18 && isFemale) {
//     console.log("its a female adult");
// 

// let a= 5;
// let b = 10;
// let c = 15;             // output: c is greatest
// if (a > b && a > c) {
//     console.log("a is greatest");
// } else if (b > a && b > c) {
//     console.log("b is greatest");
// } else {
//     console.log("c is greatest");
// }

// let a;
// let b;
// let c;
// let result = a && b && c; // Output: undefined (logical AND operator with short-circuit evaluation)
// console.log(result);

// console.log( 1&& 0); // Output: 0 (logical AND operator with short-circuit evaluation   
// console.log( null && 2); // Output: null (logical AND operator with short-circuit evaluation)
// console.log( null && 2); // Output: null (logical AND operator with short-circuit evaluation)
// console.log( null && 0 && 1); // Output: null (logical AND operator with short-circuit evaluation)
// console.log(undefined && null && false); // Output: undefined (logical AND operator with short-circuit evaluation)
// console.log( 0 && "Hello"); // Output: 0 (logical AND operator with short-circuit evaluation)
// console.log(1&& 2 && null && "Hello"); // Output: null (logical AND operator with short-circuit evaluation)


