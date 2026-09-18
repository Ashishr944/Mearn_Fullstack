// // task1: 
// // find the largest element in a 2 D matrix
// // input ->
// // [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]
// // output -> 9
// // let arr = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]

// // let max = arr[0][0]
// // for(let i=0;i<arr.length;i++){
// //     for(let j=0; j<arr.length;j++){
// //         if(arr[i][j]>max){
// //             max = arr[i][j]
// //         }
// //     }
// // }
// // console.log(max)




// // let arr = 
// // [
//     //     [1,1,1,1],
//     //     [1,1,1,1],
//     //     [1,1,1,1],
//     // ]
    
//     // // 3 X 4
// // // length = arr[0].length
// // // width = arr.length


// //task2 find the transpose of a matrix
// // input ->
// // [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]
// // output ->
// // [
// //     [1,4,7],
// //     [2,5,8],
// //     [3,6,9],
// // ]

// // let arr = 
// // [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]

// // let tras = [];
// // for(let i=0; i<arr[0].length;i++){
// //     let innerArr = []
// //     for(let j=0; j<arr.length; j++){
// //         innerArr.push(arr[j][i])
// //     }
// //     tras.push(innerArr)
// // }
// // console.log(tras)




// // task3:
// // do a snake like traversal of a matrix
// // input ->
// // [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]
// // output -> 1 2 3 6 5 4 7 8 9

// // let arr =  [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]

// // for(i=0; i<arr.length; i++){
// //     if(i%2==0){
// //         for(let j=0;j<arr.length;j++){
// //             console.log(arr[i][j])
// //         }
// //     }else{
// //         for(let j=arr.length-1; j>=0; j--){
// //             console.log(arr[i][j])
// //         }
// //     }
// // }


// // task 4: spiral traversal of a matrix
// // input ->
// // [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9],
// // ]
// // output -> [1,2,3,6,9,8,7,4,5]


// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let top = 0;    //1st row index
// let bottom = arr.length -1; //last row index
// let left = 0;   //first column index
// let right = arr[0].length -1;   //last column index


// let result = [];

// while(top <= bottom && left <= right){

//     // left to right (top is fixed)
//     for(let i=left ;i<=right ;i++){
//         result.push(arr[top][i])
//     }
//     top++;  //next row

//     // top to bottom (right is fixed)
//     for(let i=top; i<=bottom; i++){
//         result.push(arr[i][right])
//     }
//     right--; //previous column

//     // right to left (bottom is fixed)
//     for(let i=right; i>=left; i--){
//         result.push(arr[bottom][i])
//     }
//     bottom--; //previous row

//     // bottom to top (left is fixed)
//     for(let i=bottom; i>=top; i--){
//         result.push(arr[i][left])
//     }
//     left++ //next column
// }
// console.log(result)





// let arr = [1,{name: "pranav"}]
// console.log(arr[1].name) //"pranav"

// let arr = [1, ["pranav", "raju"]]
// console.log(arr[1][1])  //"raju"


// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr[0][0])  //1
// console.log(arr[0][1])  //2
// console.log(arr[0][2])  //3

// console.log(arr[1][0])  //4
// console.log(arr[1][1])  //5
// console.log(arr[1][2])  //6


// console.log(arr[2][0])  //7
// console.log(arr[2][1])  //8
// console.log(arr[2][2])  //9


// task below is the given array insert elements into it so the the result looks like arr2
// you are not allowed to hard code
// let arr = [];
// arr2 = [[1,2,3], [4,5,6], [7,8,9]];

// let arr = [];
// let count = 0;

// for(let i = 0 ;i < 4; i++){
//     let innerArr = [];
//     for(let j = 0; j < 3; j++){
//         count++;
//         innerArr.push(count);
//     }
//     arr.push(innerArr)
// }
// console.log(arr)        //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// console.table(arr)        //to see in table format



// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// tasks1: print the elements row wise : 1,2,3,4,5,6,7,8,9
// tasks2: print the elements column wise : 1,4,7,2,5,8,3,6,9
// tasks3: print the daigonal elements of the sqaure matrix: 1,3,5,7,9
// tasks4: print the non daigonal elements of the square matrix: 2,4,6,8
// tasks5: find the center element of the square matrix: 5

// // row wise
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(arr[i][j])
//     }
// }

// col wise
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         console.log(arr[j][i])
//     }
// }

// daigonal elements
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j || i+j == 2){
//             console.log(arr[i][j])
//         }
//     }
// }

// non daigonal elements
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j || i+j == 2){
//             continue;
//         }else{
//             console.log(arr[i][j])
//         }
//     }
// }

// center element
// for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j && i+j == 2){
//             console.log(arr[i][j])
//         }
//     }
// }