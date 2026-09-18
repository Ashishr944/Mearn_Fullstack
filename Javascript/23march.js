////****const
//// const or constants is a unchanging variable.
//// they cannot be re assigned 
// let variable are reassignable or updatable
// let name = "John";
// name = "raju";
// console.log(name);


// you cannot assign or updare a const variable.
//const name = "John";
// name = "raju";
// console.log(name);


// use capital letters when you are using const value that need to be used
// in multiple places
// const PI = Math.PI;
// const BLACk = "#000000";



////****Scope{}
//// the block of code written in betweeb {} has block scope
// types of scopes:
// global
// block 

// let hello = "Hello World1"; // global scope
// {
//     let hello = " hello World"; // block scope
//     console.log(hello); // hello world      
// }
// console.log(hello); // hello world1


// let hello = "Hello World1"; // global scope
// {
//     let hello = " hello World"; // block scope
//     console.log(hello); // hello world      
// }
// {
//     let hello = " hello World1"; // local variable
// }
// console.log(hello); // cannot access 



/////////example/////
// let username = "John";
// function changeUsername() {
//     let username = "Alice";
//     console.log(username); // Alice
// }
// changeUsername();

// console.log(username); // John


// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// } // output 0 to 9


//2)
// let i
// for ( i = 0; i < 10; i++) {
//     // console.log(i);
// } // output 0 to 9

// console.log(i); // 10

///////////////////////////////////
// console.log(c); // undefined
// var c = 10;

/// hoisting: when the code is getting executed the declaration of the variable is taken to the top of its scope


// the aboove will look like the below one after hoistin
// {
//     var c;
//     console.log(c); // undefined
//     c = 10;
// }



// note: hosting is applied on var variables and functions
// functions can be called before its declaration
// when functions are hoisted the whole function is taken to the top of its scope
// greet();
// function greet() {
//     console.log("hello");  
// }


// function expressions 
// let greet2 = function() {
//     console.log("hello");
// }
// greet2(); // hello
// the above code will not work if we call greet2 before its declaration because only the variable declaration is hoisted not the assignment of the function expression to the variable.

// eg
// greet2(); // error: greet2 is not a function
// let greet2 = function() {
//     console.log("hello");
// }

//eg
// greet2(); // error: greet2 is not a function
// var greet2 = function() { //will give error with var, let and const because only the variable declaration is hoisted not the assignment of the function expression to the variable.
//     console.log("hello");
// }

// tamporal dead zone: it is the period in JS where a let or const variable exist in its scope but cannot be accessed until declaration is reached.
//eg
// {
//     console.log(x); // ref error (TDZ active)
//     let x = 10;  // TDZ eds here
//     console.log(x); // 10
// }

//////////////var //////
// var is global scope
//eg
// {
//     {
//         var a = 5;
//     }
// }
// console.log(a); // output 5


//eg
// for(let i = 0; i < 10; i++ ){

// }
// console.log(i);

// if var is inside a function it will become function scoped
//eg
// function func(){
//     var a = 5;

// }
// func();
// console.log(a);


/// var variables can be redeclared
// var a = 5;
// var a = 6;
// console.log(a);


// |keywords          |       scopetype               |block aware           | redeclare in same scope        |   TDZ
// |var               |    function or global         |   no                 |      yes                       |  no(hoisted)
// |let               |   block( if, for, while etc)  |  yes                 |     no                         |  yes
// |const             |   block                       |  yes                 |     no                         |  yes