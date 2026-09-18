// # RECURSION: //

const { captureOwnerStack } = require("react");

// //1. Facorial of number
// function facorial(n){
//     if(n ===0 || n ===1){
//         return 1;
//     }
//     return n * facorial(n-1);
// }
// console.log(facorial(5)); // 120
// console.log(facorial(12)); // 479001600


// 2. Sum of numbers
// function sum(n){
//     if(n ===1){
//         return 1;
//     }
//     return n + sum(n-1);
// }
// console.log(sum(49)); //1225
// console.log(sum(34)); //595
// console.log(sum(6)); //21




//3. Febonacci NUmber
// function febonnaci(n){
//     if(n === 0) return 0;
//     if(n === 1) return 1;

//     return febonnaci(n-1) + febonnaci(n -2);
// }
// console.log(febonnaci(6));//8



//4. Print 1 to n
// function print(n){
//     if( n === 0){
//         return;
//     }

//     print(n -1);
//     console.log(n);
// }
// console.log(print(6));
// ouput:
// 1
// 2
// 3
// 4
// 5
// 6



//5. print n to 1
// function print(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     print(n -1);
// }
// console.log(print(6));
// // output:
// 6
// 5
// 4
// 3
// 2
// 1




//6. Reverse String
// function reverse(str){
//     if( str.length === 0){
//         return "";
//     }
//     return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("Apple")); // elppA





// 7. Check palindrome
// function palindrome(str){
//     if(str.length <= 0){
//         return true;
//     }
//     if( str[0] !== str[str.length -1]){
//         return false;
//     }
//     return palindrome(str.slice(1, -1));
// }
// console.log(palindrome("madam")); // true



//8. Power of Number
// function power(x, n){
//     if(n ===0){
//         return 1;
//     }
//     return x * power(x, n-1);
// }
// console.log(power(2,4)); //16



// 9 Sum of array elements
// function sumArray(arr, index){
//     if(index === arr.length){
//         return 0;
//     }
//     return arr[index] + sumArray(arr, index +1);
// }
// console.log(sumArray([1,2,3,4,5,6], 0)); // 21




// 10. Find max In array
// function max(arr, index){
//     if(index === arr.length -1){
//         return arr[index];
//     }

//     let rest = max(arr, index +1);
//     return Math.max(arr[index], rest);
// }
// console.log(max([2,3,45,7,65,43], 0)) // 65




// 11. Count digit
// function count(n){
//     if(n === 0){
//         return 0
//     };
//     return 1 + count(Math.floor(n/10));
// }
// console.log(count(134321)); // 6



// Binary Search using recursion
// function binarSearch(arr, left, right, target){
//     if( left> right){
//         return -1;
//     }
//     let mid = Math.floor((left + right)/2);

//     if(arr[mid] === target){
//         return mid;
//     }
//     if(target < arr[mid]){
//         return binarSearch(arr,left,mid-1, target);

//     }
//     return binarSearch(arr, mid+1, right, target);
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(binarSearch(arr, 0, arr.length-1, 5)); // 4



// 13. Flatten Nested Array

// function flatten(arr){
//     let result = [];
//     for(let item of arr){
//     if(Array.isArray(item)){
//         result = result.concat(flatten(item));
//     }
//     else{
//         result.push(item);
//     }
//     }
//     return result;
// }
// console.log(flatten([1,[3,3], [23, 5,45]])); //[ 1, 3, 3, 23, 5, 45 ]


// 14. Find occurance of character
// function countChar(str, char){
//     if(str.length === 0){
//         return 0;
//     }

//     if(str[0] === char){
//         return 1+ countChar(str.slice(1), char);
//     }
//     return countChar(str.slice(1), char);
// }
// console.log(countChar("banana", "a")); // 3



// //15. Generate all subset
// function subset(arr, index, current){
//     if( index === arr.length){
//         console.log(current);
//         return;
//     }
//     subset(arr, index+1, current);
//     subset(arr, index+1, [...current, arr[index]]);
// }
// subset([1,2], 0, []);

// output
// []
// [ 2 ]
// [ 1 ]
// [ 1, 2 ]


// 16.Tower of Hanoi
// function hanoi(n, source, helper, destination){
//     if(n ===1){
//         console.log("move", source, "to", destination);
//         return;
//     }
//     hanoi(n -1, source, destination, helper);

//     console.log("move", source, "to", destination);
//     hanoi(n-1,helper,source,destination);
// }
// hanoi(3,"A","B","C");

// output
// move A to C
// move A to B
// move C to B
// move A to C
// move B to A
// move B to C
// move A to C