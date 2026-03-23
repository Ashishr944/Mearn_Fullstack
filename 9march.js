// // ##For loop
// // It is used to run a block of code for a specific number of times. It consists of three parts: initialization, condition, and increment/decrement steps.
// //* Syntax:
// // for (initialization; condition; increment/decrement steps ) {
//     // loop body
// // } 

// for( let i =0; i <3; i++){  // let i = 0 is initialization, i < 3 end( check before increment) and i++ is increment step
//     console.log(i);         // i=0 if( condtion) run body and then run steps 
// }


// let i =0;
// for( ; i < 3; i++){  // initialization is optional
//     console.log(i);
// }


// for(let i =0; i<5; ++i){  // increment step can be written in pre increment form as well
//     console.log(i);
// }

// //* break and continue in for loop
// // used to control the iteration of a running loop.
// //break used to break the execution of the loop and come out of it. It is used when we want to stop the loop when a certain condition is met.
// for( let i =0; i <= 5; i++){
//     if (i === 3) {
//         break; // when i is 3 loop will break and come out of it
//     }
//     console.log(i);
// }

// //continue is used to skip the current iteration of the loop and move to the next iteration. It is used when we want to skip a certain condition and continue with the next iteration of the loop.
// for( let i= 0; i <= 5; i++){
//     if( i ==3){
//         continue;       
//     }
//     console.log(i);
// }

// // note; for vs while
// // use for loop when you know how many times you want to run a loop
// //use while loop when dont know how many times you want to run the loop but you know when to end it


//// Question; you are given a number n find the nuber of digit in that number
////eg: n = 100->3
////eg: n = 765456->6
////eg: n = 1->1

// let n= 1;
// let i = 0;
// while (n > 0) {
//     // n = Math.floor(n / 10); // Remove the last digit from the number
//     // i++; // Increment the count for each digit removed
//     let reminder = n % 10;
//     n = n - reminder;
//     n = n /10;
//     i++;

// }
// console.log(i);


//// Question 2: given a number n find the sum of its digit
//// eg; n = 572 -> 5 + 7 +2 -> 14
// let n =5432;
// let s = 0;
// let mul =1;
// while (n > 0) {
//     // let d = n % 10;
//     // s += d;
//     // n = Math.floor(n / 10);

//     let reminder = n % 10;
//     n = n - reminder;
//     n = n / 10;
//     s = s + reminder;
//     mul = s * reminder;
// }
// console.log(s);
// console.log(mul);




//// given number n print its table till 10;
//// eg if n =2
//// print below 
/// 2*1 =2

// let n = 2;
// let i = 1;

// while (i <= 10) {
//     // console.log(n + " * " + i + " = " + (n * i));
//     // i++;

//     //// using backticks
//     console.log(`${n} * ${i} = ${n * i}`);
//     i++;
// }



// for( let i =0; i <5;){
//     console.log(i++)
// }// 0 1 2 3 4 

// for( let i =0; i <5; ){
//     console.log(++1);
// }// 1 2 3 4 5



////Question: find the first number that is divisible by 7 and 5 both using for loop
//// the number will be in between 1 and 500
// let a = 7; 
// let b = 5; 
// for (let i = 1; i <= 500; i++) { // we are checking for all the numbers from 1 to 500
//     if (i % a === 0 && i % b === 0) { // if the number is divisible by both 7 and 5 then we will print that number and break the loop
//         console.log(i); // we will print the number and then break the loop because we want to find the first number that is divisible by both 7 and 5
//         break; // we will break the loop because we want to find the first number that is divisible by both 7 and 5
//     }
// }
