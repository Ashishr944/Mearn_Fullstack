// Subarray //
//************************** */
// // task Do boundary traversal of matrix

// let arr = [
//     [ 5, 4, 6, 3],
//     [ 1, 4, 3, 5],
//     [ 5, 1, 9, 6]
// ]
// let top =0;
// let bottom =arr.length -1;
// let left =0;
// let right = arr[0].length -1;

// let result = [];
// // while ( top <= bottom && left <= right){
//     // left to right ( top is fixed)
//     for ( let i = left; i <= right; i++){
//         result.push(arr[top][i])
//     }
//     // top++;  // next row

//     // top to bottom ( right to fixed)
//     for( let i = top; i <= bottom; i++){
//         result.push(arr[i][right])
//     }
//     // right--; // previous column

//     // right to left ( bottom is fixed)
//     for( let i = right; i>= left; i--){
//         result.push(arr[bottom][i])
//     }
//     // bottom--; // previous row

//     // bottom to top( left is fixed)
//     for( let i = bottom; i>= top; i--){
//         result.push(arr[i][left])
//     }
//     // left++

// // }
// console.log(result);

// // ouput;
// [
//   5, 4, 6, 3, 3, 5,
//   6, 6, 9, 1, 5, 5,
//   1, 5
// ]






//************************** */

// let arr = [1,2,3,4,5];
// // Aproach 1:

// for ( let i =0; i< arr.length; i++){
//     let sub = [];
//     for ( let j =i; j< arr.length; j++){
//         sub.push(arr[j]);
//         console.log(sub);
//     }
// }


// // // Aproach 2:
// for( let i =0; i<arr.length; i++){
//     for( let j =0; k<arr.length; j++){
//         console.log(arr.slice(i, j+1));
//     }
// }

// //outpu:
// [ 1 ]
// [ 1, 2 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]
// [ 2 ]
// [ 2, 3 ]
// [ 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
// [ 3 ]
// [ 3, 4 ]
// [ 3, 4, 5 ]
// [ 4 ]
// [ 4, 5 ]
// [ 5 ]

//******************************** */

// // task: given a target element find if the sum of subarrays give that target

// function hasSubarraySum( arr, target){
//     for( let i =0; i< arr.length; i++){
//         let sum =0;
//         for( let j=i; j<arr.length; j++){
//             sum += arr[j];
//             if(sum == target){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(hasSubarraySum([1,2,3,4,5],15))



// // output: \true
//*************************************** */

// kadence also used to calculate the maximum sum of array

//**************************************** */

// task:
function maxSubarraySub(arr){
    let maxSub = arr[0]; // tracks the maximum sum found 
    let maxEnd = arr[0]; // tracks the max sum of subarray ending at current index
    

    // Looping through the array strating from 1
    for(let i=0; i < arr.length; i++){
        // takes maximum of  current vs previous ending sum + current
        maxEnd = Math.max(arr[i], maxEnd + arr[i]);

        // updating global max if current
        maxSub = Math.floor(maxSub, maxEnd);
    }
    return maxSub
}
let result = maxSubarraySub(arr)