// console.log("Hello, World! This is a simple JavaScript file.");



//variablr is decladed but not ininialized
// let animal

//variable is initialized but not declard
// animal = "Dog"
// let animal = "Dog"
// console.log(animal);


// addition
// let a=10;
// let b=20;
// console.log(a+b);

// let a= "apple";
// let b= "banana";
// console.log(`${b}`);




// let name = "Ashish";
// let age ="22";
// console.log(`My name is ${name} and my age is ${age}`);

//date: 26 feb
// let a=3;
// let b=4;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);



//urinary operators
// let c=5;
// console.log(-c);


// let str1="Hello";
// let str2="World";
// console.log(str1 + str2);

// let name = "Ashish";
// let age = 22;
// console.log("My name us " +name + " and my age is " + age  );




// CONVERT NUMBER TO STRING
// let a ="10";
// let b = "20";
// console.log(a + b);
// console.log(Number(a) + Number(b));
// console.log(+a + +b);


// let totalPrice = 700;
// let discount = 15;
// let discountedPrice = totalPrice - (totalPrice * discount / 100);
// console.log(`The discounted price is: ${discountedPrice}`);


// let ferenheit = 100;
// let celsius = (ferenheit - 32) * 5 / 9;
// console.log(ferenheit + " degrees Ferenheit is equal to " + celsius + " degrees Celsius.");

// let baseSalary = 50000;
// let increment = 15;
// let dedduction = 10;
// let newSalary = baseSalary + (baseSalary * increment / 100) - (baseSalary * dedduction / 100);
// console.log(" The new salary after increment and deduction is: " + newSalary);
// **********************************************************************************************************
// date: 27 feb 2026
// Math.round
// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.round(4.3)); // Output: 4



// Math.floor
// console.log(Math.floor(4.7)); // Output: 4
// console.log(Math.floor(4.3)); // Output: 4      
// console.log(Math.floor(-4.7)); // Output: -5
// console.log(Math.floor(-4.3)); // Output: -5


// Math.ceil
// console.log(Math.ceil(4.7)); // Output: 5
// console.log(Math.ceil(4.3)); // Output: 5
// console.log(Math.ceil(-4.7)); // Output: -4
// console.log(Math.ceil(-4.3)); // Output: -4 



// Math.toFixed
// let num = 5.98778;
// console.log(num);
// console.log(num.toFixed(0)); // Output: 6
// console.log(num.toFixed(1)); // Output: 6.0
// console.log(num.toFixed(2)); // Output: 5.99
// console.log(num.toFixed(3)); // Output: 5.988
// console.log(num.toFixed(4)); // Output: 5.9878


//parseint
// console.log("44");
// console.log(parseInt("44")); // Output: 44
// console.log(parseInt("44.25")); // Output: 44
// console.log(parseInt("-44")); // Output: -44
// console.log(parseInt("44px")); // Output: 44
// console.log(parseInt("px"));



// parseFloat
// console.log(parseFloat("3.14"));


// comparison operators

// console.log(5 > 3); // Output: true assignment operator
// console.log(5 < 3); // Output: false assignment operator
// console.log(5 >= 5); // Output: true  assignment operator
// console.log(5 <= 4); // Output: false   assignment operator
// console.log(5 == "5"); // Output: true (loose equality) comparison operator
// console.log(5 === "5"); // Output: false (strict equality) comparison operator
// console.log(5 != "5"); // Output: false (loose inequality) comparison operator
// console.log(5 !== "5"); // Output: true (strict inequality) comparison operator
// console.log(1 == false); // Output: true (loose equality) comparison operator
// console.log(null == false); // Output: false (loose equality) comparison operator
// console.log(null === undefined); // Output: false (strict equality) comparison operator
// console.log(" " == 0); // Output: true (loose equality) comparison operator
// console.log(null == false); // Output: false (loose equality) comparison operator
// console.log("Z"> "A"); // Output: true (lexicographical comparison) comparison operator
// console.log("Glow"> "Glee"); // Output: true (lexicographical comparison) comparison operator
// console.log("Bee"> "Be"); // Output: true (lexicographical comparison) comparison operator
// // when comparing 2 stirng values if any one value is a number JS will be convert the other to a number and then the comparison is done between 2 numbers
// // the string 2 gets conveeted into number and ther comparison is done between 2 and 1
// console.log("2" > 1); // Output: true (lexicographical comparison) comparison operator
// console.log(true == 1); // Output: true (loose equality) comparison operator 
// console.log(false == 0); // Output: true (loose equality) comparison operator
// console.log(false == ""); // Output: true (loose equality) comparison operator
//********************************************************************************************************************************************* */

//1st march 2026
// Conditional statements
//let age = 13;

//syntax of if statement
// if(condition){
//     // code to be executed if condition is true
// }

//if(age >= 18){
//    console.log("You are eligible to vote.");
//}

//this is also another way to write the above code
// if(age >= 18) console.log("You are eligible to vote.");

// else statement
//syntax of if-else statement
// if(condition){
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }
//else{
//    console.log("You are not eligible to vote.");
//}




// else if statement
//syntax of if-else statement
// if(condition){
//     // code to be executed if condition is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition and condition2 are false
// }

let year = 2024;
if ( year > 2024) {
    console.log("The year is in the future.");
} else if (year < 2024) {
    console.log("The year is in the past.");
} else {
    console.log("The year is the current year.");
}