let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

// 1. array traverse
// let result = [];
// for(let i = 0; i< arr.length; i++){
//     for(let j =0; j< arr.length; j++){
//         result.push(arr[i][j]);
//     }
// }
// console.log(result);  // [  1, 2, 3, 4, 5, 6, 7, 8, 9]

// 2. Row wise sum
// for(let i =0; i< arr.length; i++){
//     let sum =0;
//     for(let j =0; j< arr[i].length; j++){
//         sum += arr[i][j];
//     }
//     console.log(sum); 
//     // 6
//     // 15
//     // 24
// }



//3 collumn wise sum 
// for(let j =0; j< arr[0].length; j++){
//     let sum =0;

//     for(let i =0; i< arr.length; i++){
//         sum += arr[i][j];
//     }
//     console.log(sum);
//     // 12
//     // 15
//     // 18
// }




// 3. find max of array
// let max =0;
// for(let i =0; i< arr.length; i++){
//     for(let j =0; j< arr.length; j++){
//         if(max < arr[i][j]){
//             max = arr[i][j];
//         }
//     }
// }
// console.log(max); // 9


// 4 find min element
// let min = arr[0][0];
// for(let i =0; i< arr.length; i++){
//   for(let j = 0; j<arr.length; j++){
//     if(min > arr[i][j]){
//       min = arr[i][j];
//     }
//   }
// }
// console.log(min) // 1


// 5. search element
// let target = 5;
// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//       if(arr[i][j] === target){
//          console.log("Found");
//       }
//   }
// }


// 6. Main Diagonal Sum
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i][i];
// }
// console.log(sum); // 15

// 7. secondary diagonal sum
// let sum = 0;
// let n = arr.length;
// for(let i=0;i<n;i++){
//    sum += arr[i][n-1-i];
// }
// console.log(sum);


// 8. transpose of matix
// let trans = [];
// for(let i =0; i< arr.length; i++){
//   for(let j =0; j< arr.length; j++){
//     trans.push(arr[j][i]);
//   }
// }
// console.log(trans); // [1, 4, 7, 2, 5, 8, 3, 6, 9 ]



// 9. count even numbers
// let count = 0
// for(let i =0; i< arr.length; i++){
//   for(let j =0; j< arr.length; j++){
//     if(arr[i][j] % 2 === 0){
//       count++;
//     }
//   }
// }
// console.log(count); // 4


//10. sum of even numbers
// let sum = 0;
// for(let i =0; i< arr.length; i++){
//   for(let j =0; j< arr.length; j++){
//     if(arr[i][j] % 2 === 0){
//       sum += arr[i][j];
//     }
//   }
// }
// console.log(sum);