// task 1
// find the largest in a 2D matrix
let arr = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// for( let i =0; i< 3; i++){
//     max = 0;
//     for( let j= 0; j<3; j++){
//         if( arr[i][j] > max){
//             max = arr[i][j]
//         }
//     }
// }
// console.log(max); // ouput: 9
let max =0;
for(let i =0; i< arr.length; i++){
    for(let j =0; j<arr.length; j++){
        if(arr[i][j] > max){
            max += arr[i][j]
        }
    }
}
console.log(max)

//****************************************

// Transpose of matrix
// let arr = [
//     [ 1, 2, 3],
//     [ 4, 5, 6],
//     [ 7, 8, 9]
// ];

// task 1 : Trasnpose of matrix
// let trans = [];
// for( let i =0; i < arr[0].length; i++){
//     let innerArr = [];
//     for( let j = 0; j< arr.length; j++){
//         innerArr.push(arr[j][i])
//     }
//     trans.push(innerArr)
// }
// console.log(trans)


// let trans= [];
// for(let i =0; i< arr.length; i++){
//     let innerArr = [];
//     for(let j =0; i< arr.length; j++){
//         innerArr.push(arr[j][i]);
//     }
//     trans.push(innerArr)
// }
// console.log(trans);
// //ouput:
// [ 
// [ 1, 4, 7 ], 
// [ 2, 5, 8 ], 
// [ 3, 6, 9 ] 
// ]

let trans =[];
for(let i=0; i< arr.length; i++){
    let innerArr= [];
    for(let j =0; j< arr.length; j++){
        inneerArr.push(arr[j][i]);
    }
    trans.push(innerArr)
    
}
console.log(trans)


//******************************* */
// task 2: Snake like tranversal of matrix

// for( let i =0; i< arr.length; i++){
//     if( i%2 == 0){
//         for( j =0; j<arr.length; j++){
//             console.log(arr[i][j])
//         }
//     }
//     else{
//         for(let j =arr.length-1; j>=0; j--){
//             console.log(arr[i][j])
//         }
//     }
// }

// for(let i =0; i< arr.length; i++){
//     if( i%2 == 0){
//         for(j =0; j< arr.length; j++){
//             console.log(arr[i][j]);
//         }
//     }
//     else{
//         for(let j = arr.length -1; j> 0; j-- ){
//             console.log(ar[i][j]);
//         }
//     }
// }


for(let i=0; i< arr.length; i++){
    if( i% 2== 0){
        for(j =0; j<arr.length; j++){
            console.log(arr[i][j]);
        }
    }
    else{
        for(j= arr.length -1; j> 0; j--){
            console.log(arr[i][j])
        }
    }
}

// ouput:
// 1
// 2
// 3
// 6
// 5
// 4
// 7
// 8
// 9

// *********************************** */
// // task 3: Spiral traversal of a matrix

// let top =0; //  1st row index
// let bottom = arr.length-1; // last row index
// let left =0; // first column index
// let right = arr[0].length -1 // last column index

// let result = [];
// while ( top <= bottom && left <= right){
//     // left to right ( top is fixed)
//     for ( let i = left; i <= right; i++){
//         result.push(arr[top][i])
//     }
//     top++;  // next row

//     // top to bottom ( right to fixed)
//     for( let i = top; i <= bottom; i++){
//         result.push(arr[i][right])
//     }
//     right--; // previous column

//     // right to left ( bottom is fixed)
//     for( let i = right; i>= left; i--){
//         result.push(arr[bottom][i])
//     }
//     bottom--; // previous row

//     // bottom to top( left is fixed)
//     for( let i = bottom; i>= top; i--){
//         result.push(arr[i][left])
//     }
//     left++

// }
// console.log(result);

// // ouput:
// [ 1, 2, 3, 6, 9,8, 7, 4, 5]

let top =0;
let bottom = arr.length -1;
let left = 0;
let result = arr[0].length -1;

let result = [];

while(top <= bottom && left <= right){
    for(let i = left; i<= right; i++){
        result.push(arr[top][i])
    }
    top++;
    for(let i = top; i<= bottom; i++){
        result.push(arr[i][right])
    }
    right--;
    for(let i = right; i>= left; i--){
        result.push(arr[top][i]);
    }
    bottom--;
    for(let i = bottom; i>= top; i--){
        result.push(arr[i][left]);
    }
    left++
}
console.log(result);