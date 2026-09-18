// let arr = [ -2, -3, 4, -1,-2, 1, 5,4,5];
// let max = -Infinity;

//******************************* */

// Bruth force approach to find the largest sum of subarray

//******************************* */
// for( let i =0; i < arr.length; i++){
//     for ( let j =i; j< arr.length; j++){
//         let sum =0;
//         for(let k =i; k<=j; k++){
//             sum += arr[k];

//         }

//         max = Math.max(max, sum)
//     }
// }
// console.log(max); // 16

//*************************************** */

// kadence also used to calculate the maximum sum of array

//**************************************** */


// let arr = [ -2, -3, 4, -1,-2, 1, 5,4,5];

// function maxSubarraySub(arr){
//     let maxSub = arr[0]; // tracks the maximum sum found 
//     let maxEnd = arr[0]; // tracks the max sum of subarray ending at current index
    

//     // Looping through the array strating from 1
//     for(let i=0; i < arr.length; i++){
//         // either exted previous subarray or start from current element
//         // max End + arr[i] will always be greater than arr[i] if both are +ve
//         // if arr[i] becomes -ve the sum is less that mexEnd and there is no point in storing that velue

//         // takes maximum of  current vs previous ending sum + current
//         maxEnd = Math.max(arr[i], maxEnd + arr[i]);

//         // updating global max if current
//         maxSub = Math.floor(maxSub, maxEnd);
//     }
//     return maxSub
// }
// let result = maxSubarraySub(arr)

//**************************************************** */

// task: find if the target element in the array
// the target is the sum of any 2 elements in the array

// let arr = [2,6,5,8,11];
// let target = 10;

// function BruthForceApproach( arr, target){
//     for( let i =0; i<arr.length; i++){
//         for( let j =0; j<arr.length; j++){
//             if( arr[i] + arr[j] == target){
//                 return true;
//             }
//         }
//     }
//     return false;

// }


// console.log(BruthForceApproach(arr,10)) // true
// console.log(BruthForceApproach(arr,20)) // false
// console.log(BruthForceApproach(arr,16)) // true


//*************************************************** */
// two sum  problem algorithm//
//*************************************************** */

// function twoSum( arr, target){
//     arr.sort(sortArr)
//     function sortArr(a, b){
//         return a-b;
//     }

//     let left =0; 
//     let right = arr.length -1;
//     while( left < right ){
//         let sum = arr[left] + arr[right];

//         if ( sum == target){
//             return true;
//         }
//         else if(sum < target){
//             left++;

//         }
//         else{
//             right--;
//         }

//     }
//     return false;
// }
// console.log(twoSum([0, -1, 2, -3, 1], -2)); // true
// console.log(twoSum([0, -1, 2, -3, 1], 3)); // true

//************************************************** */
// Sliding window  Algorithm//
// to find max sum of sub array of perticula mentioned size
//************************************************** */


// function maxSumSlidingWindow(arr, k){
//     const n =arr.length;
//     if( n< k){
//         return "Invalid k";
//     }

//     let windowSum = 0; 
//     // Step1 : calculate the sum of !st subarray
//     for( let i =0; i< k; i++){
//         windowSum += arr[i];
//     }
//     let maxSum = windowSum;

//     // sliding logic
//     // SLide the window from strt to end of the array
//     // is the previous element arr[i-k] is removed from the windowSum and next element arr[i] is added
//     for( let i=k; i<n; i++){
//         windowSum += arr[i] -arr[i-k];
//         maxSum = Math.max(maxSum, windowSum);
//     }
//     return maxSum;

// }
// console.log(maxSumSlidingWindow([5,2,-1,0,3], 3)); // output : 6







//****************************************************** */

