// function greet(){
//     console.log("hello")
// }
// greet();

// function in array
// function a(){
//     console.log("a");
// }
// function b(){
//     console.log("b");
// }
// let arr = [a,b];
// let obj = {
//     a :a,
//     b :b,
// }
// obj.a(); // object 
// arr[1]();




// callback function: 
// a callback is simply passed into another function to be executed later
// the outermost function decides the execution of the inner function

// function greet(){
//     console.log("hello")
// }

// function outer(fn){
//     fn();

// }
// outer(greet);



// method 1

// function calculator (a, b, fn){
//     return fn(a,b);
// }

// function add(a,b){
//     return a +b;
// }

// function mul(a,b){
//     return a * b;
// }
// console.log(calculator(1,2,add));
// console.log(calculator(4,5, mul));





// // method 2
// let calculator = (a,b,fn) => fn(a,b);
// let add = (a,b) => a +b;
// let mul = (a,b) => a *b;

// console.log(calculator(1,2, add));
// console.log(calculator(4,5, mul));



//********************************************* */
// HOF it is a function with either accepts another function as an arg or returns a function


// Method 1

// function outer(){
//     return function(){
//         console.log("hello");
//     }
// }
// let resultFromOuter = outer();
// resultFromOuter();

// //or
// outer()();




// method 2

// let outer = () => {
//     return () => {
//         console.log("hello")
//     }

// }
// outer()();









// function createGreeter(greetings){
//     return function (name){
//         return greetings + " " + name;
//     }
// }

// let result = createGreeter("Hi");
// console.log(result("Ashish"));

// // or

// console.log(createGreeter("Hi")("Ashish"));




//**************************** */
// closures
// Closure happens when an inner function remembers variables from the outer function
// even after outer has finished the execution

// function outer (){
//     let count =0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// const counter = outer();
// counter();
// counter();
// counter();
// counter();







function ATM(){
    let pin = 12345;
    let balance = 54345;
    let accountN0 = 98765434567;

    // return () => { return balance};

    //or
    return function(){
        return balance;
    }
    
}

const seeBalance = ATM();
console.log(seeBalance());