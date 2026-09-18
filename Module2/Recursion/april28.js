
// rewatch this video
//***************************** */
// * Recursion:
// when a Function calls itself

// * recursion function usually has 2 parts
// base case : constion when the answer is kown direclty and recursion stops
// recursive case: the part where a function calls itelf 
//***************************** */

// for(let i=1; i<=5; i++){
//     console.log(i)
// }


// function countDown(n){
//     if (n == 0){
//         return 
//     }
//     console.log(n);
//     countDown(n-1);

// }
// countDown(5)

// 

// lets calculate the sum of 1 + 2 + 3 + 4 + 5 + 6 + 7
// method 1
// function sumOf(n){
//     sum = 0
//     for( let i= 1; i <=n; i++){
//         sum += i; 
//     }
//     console.log(sum);

// }
// sumOf(7) // 28
// sumOf(19) // 190
// sumOf(23) // 276

// // method 2
// function sumOfN(n){
//     if(n==1){
//         return 1
//     }
//     return n + sumOfN( n -1)
// }
// console.log(sumOfN(5)) // 15

//****************************************** */
// task of base and exponent
// function power( base, exponent){
//    if(exponent ==0){
//     return 1
//    }
//    return base * power( base, exponent -1)

// }
// console.log(power(2,4)) //-> ->16


//************************************* */
// task
let arr = [1,2,3,4,5];
function sumArray(arr){
    if(arr.length == 0){
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1))

}
sumArray(arr)
