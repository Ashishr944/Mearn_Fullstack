// function Greet(message){
//     console.log(message);

//     return message + " " + "Ashish"
// }
// let resultFromFunction = Greet("Hello");
// console.log(resultFromFunction);


// Arrow Function

// let Sum = (a,b) =>{
//     return  a + b;
// }


// let Sum = (a,b) => a + b;
// the above 2 sum function are the same -> if there is no() after the arrow (=>) it means:
// wheter is written on  the right is returned


// let func = (a,b) => a-b; //1
// let func = () => "Hello"; // Hello



// let func = () => "Hello"; // Hello
// console.log(func());

// let func = () => ({ name : "pranav"}) // this print object in single line
// console.log(func());

// Arrow function defination -> these provide a shorter syntax for function expression.



let arr = [ 2,3,4,5,6,6,4,];


// arr.sort((a,b) =>{
//     return a-b;
// } );

arr.sort((a,b) => a-b); // single line code to sort an array
console.log(arr);