////Functions
////A function is a reusable block of code designed to perform a specific task
////*why use functions?
////1. Reusability: Functions allow you to reuse code, which can save time and reduce errors.
////2. Modularity: Functions help break down complex problems into smaller, more manageable pieces.
////3. Readability: Functions can make code easier to read and understand by giving meaningful names to blocks of code.
////4. Maintainability: Functions can make it easier to maintain and update code, as changes can be made in one place rather than throughout the entire codebase.

////*Syntax:
//// function functionName(parameters) {
////     // function body
//// }


//// 1) functions : keyword that js to create a funtion
//// 2) functionName: name you give identidy a function( camelCase)
//// 3) ()-> holds parameters (Input)
//// 4) {}-> function body execcute when function is called

//// Naming rules for functions:
////1. Function names must be unique within the same scope.
////2. Function names should be descriptive and meaningful, reflecting the purpose of the function.
////3. Function names should follow camelCase convention, where the first word is lowercase and subsequent words are capitalized (e.g., calculateSum).
////4. Function names cannot start with a number or contain spaces or special characters (except for underscores and dollar signs).
////5. Function names should not be reserved keywords in JavaScript (e.g., function, return, if, else, etc.).

//// task implemeent 4 functions for addition, subtraction, multiplication and division of two numbers
//// these function will take 3 inputs and display the output
 let a=1;
 let b=2;

 function Addition(a,b){
    console.log(a + b);
 }
function subtraction(a,b){
    console.log(a - b);
 }
 function multiplication(a,b){
    console.log(a * b);
 }
 function Division(a,b){
    console.log(a / b);
 }

 Addition(a,b);
 subtraction(a,b);
 multiplication(a,b);
 Division(a,b);