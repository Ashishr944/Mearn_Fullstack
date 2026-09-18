// task : extrack all the odd elements of the array using recursion
// let arr = [ 1,2,3,4,5,6,7,8,9];

// methos 
// let result = [];




// method1: by using for loop
// for( let i =0; i< arr.length; i++){
//     if( arr[i] %2 !== 0){
//         result.push(arr[i])
//     }
// }


//method 2: by using recusion 
// function oddElements(arr, i){

//     // by using for loop
//     if (i == arr.length){
//         return;
//     }
//     if(arr[i] %2 !== 0){
//         result.push(arr[i]);

//     }
//     oddElements(arr, i+1);
// }
// oddElements(arr, 0);

// console.log(result); // [ 1, 3, 5, 7, 9 ]




// method3: by using helper function
// function solution(arr){
//     let result = [];
//     // here the recursive function becomes a helper function because
//     // it takes help from the outer function( ie. it uses elements from the outer function)
//     function helper(arr, i){
//     if (i == arr.length){
//         return;
//     }
//     if(arr[i] %2 !== 0){
//         result.push(arr[i]);

//     }
//     return helper(arr, i+1);
// }
// helper(arr, 0);
// return result;


// }
// console.log(solution(arr)) // [ 1, 3, 5, 7, 9 ]



// Note: when your recursive function is independent of outside veriable and only dependent on the input that is give
// it becomes a pure recursive function



//********************************** */
//task: flatten the below array

// let arr = [ 1,[2,[3,4], 5],[6,7]];
// function flatt(arr){
//     let result = [];
//     for(let i =0; i< arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result.push(...flatt(arr[i]));
//         }
//         else{
//             result.push(arr[i])
//         }
        
//     }
//     return result;
// }
// console.log(flatt(arr)) // [1, 2, 3, 4, 5, 6, 7 ]


//******************************************** */
//task: febonaci seriese

function fib(n){
    if(n<2) return n
    return fib(n-1) + fib(n-2);
}
console.log(fib(0)); //0
console.log(fib(3)); // 2
console.log(fib(10)); // 55


//******************************************** */
// task 
2:23:56