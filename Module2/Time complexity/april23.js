// // let n = 5;
// // function sum(n){
// //     let sum =0; // this will execute 1 time

// //     // this will execute 5 times or  times
// //     for( let i =1; i<= n; i++){
// //         sum +=1;
    
// //     }
// //     console.log(sum); // tnis will execute 1 time
// // }
// // sum(5);


// // total numb er of operations here is 2+ 5 or 2+ n
// // if n is 1000
// // total number of operations here is 1000+2 == 1002;
// // if n is 1000000
// // total number of operation is 1000000 +2 = 10000002;
// //  10000000 n

// // 1 + 2 +3 ..............n = n(n+1)/2
// // let n =5
// //*************************************************** */

// // function optimizesSum(n){
// //     // number of operations is 1
// //     console.log((n*(n+1))/2)
// // }
// // optimizesSum(n)



// // constant time complexity
// // O(1)
// //********************************************** */


// // let count = 0;
// // let n =5;
// // function tesAlgo(){
// //     for( let i =0;  i<n; i++){
// //         for ( let j =0; j< n; j++){
// //             count++;
// //         }
// //     }
// //     console.log(count)
// // }
// // testAlgo(5) // 25 -> 5 X 5 -> n X n


// /////////////////////////////////////////
// // O(n^2) -> quadratic time complexity

// ////////////////////////////////////////////////////

// // let count = 0;
// // let n =5;
// // function cubic(){
// //     for( let i =0;  i<n; i++){
// //         for ( let j =0; j< n; j++){
// //             for(let k =0; k<n; k++){
// //                 count++
// //             }
        
// //         }
// //     }
// //     console.log(count)
// // }
// // cubic(5)    //125
// //******************************* */
// // O(n^3)
// ///****************************** */




// // if the input size reduces as the number of operations increase we can say that the algorithm has the time complexity of O(logn)

// //********************************** */
// // space Complexity
// //********************************** */

// // * 1.constant space complexity O(1)
// // if the algo does not need extra memonry or the memory does not depent on  the input size 
// // // the space complexity is constant eg. sorting an arry in place w/o using extra arrays

// // function multiply(a,b){
// //     return a*b;
// // }
// // multiply(2,3)
// // // O(1)


// //* 2. Linear space complexity O(n)
// // the space required grows with the size of input

// // function copyArray(arr){
// //     const newArr = [];
// //     for( let i =0; i< arr.length; i++){
// //         newArr.push(arr[i]);
// //     }
// //     return newArr;
// // }
// // console.log(copyArray([1,2,3,4,5,6,7,8]));

// // // the space complexity here will be O(n)

// // function subArray(arr){
// //     let sum =0;
// //     for(let i=0; i< arr.length; i++){
// //         sum += arr[i];
// //     }
// //     console.log(sum)
// // }

// // O(1) is the space complexity
// // time complexity is O(n)

// //******************************************* */
// // O(logn) -> when the extra space grows but not at the same rate
// // eg. recursiveBinarySearch 




// //****************************** */
// // best, avg, worst


// // function findValue(arr, targe){
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]== target){
// //             return true;
// //         }
// //     }
// //     return false;
// // }
// // console.log(findValue([1,2,3,4,5], 4));

// // if target is 1 -> is best case -> O(1)
// // if target is 6 -> worst case -> O(1)
// // if target is 4 -> avg case -> O(n)



// // Object
// // insertion -> O(1)
// // deletion -> O(1)
// // acces -> o(1)
// // Object.keys() -> O(n)
// // object.values()-> O(n)
// // object.entries() -> O(n)
// // search -> O(n)


// // array
// // push(), pop() -> O(1)
// // acces -> O(1)
// // access -> O(n)
// // search -> O(n)
// // shift(), unshift() -> O(n)
// // conact, slice, splice -> O(n)
// // forEch, map, filter, reduce -> O(n)

// // Note: arr.sort() was Timesort algo which is ahybrid of merge and insertion sort
// // Best case : O(n) -> if array is already sorted
// // worst case : O(nlogn)



// // eg1
// // for(let i=0; i<n; i++){
// //     for(let j=0; j<m; j++){
// //         count++
// //     }
// // }

// // complexity-> O(n*m)


// ////////////////////
// // // eg2
// // for( let i=0; i<n; i++){
// //     count++;
// // }
// // for(let j=0; j<m; j++){
// //     count++;
// // }

// //complexity O(n + m) 


// // eg3.

// // function halfLoop(n){
// //     let i=0;
// //     while(n <n){
// //         i*= 2;

// //     }
// // }

// // complexity-> O(logn)

// function buildString(arr){
//     let result = "";
//     for( let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
// }

// // complexity -> O(n^2)