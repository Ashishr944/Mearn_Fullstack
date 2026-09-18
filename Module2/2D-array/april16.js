// let arr1 = [1, {name: "Ashish"}]
// console.log(arr1[1]); // '{ name : 'Ashish'}

// arr = [1, ["Ashish"]]
// console.log(arr[1][0]) // Ashish


// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(arr[0][0]) // 1
// console.log(arr[2][0]) // 7


// task below is the given array inspect elemtent into it so the result looks like arr2
// you are not allowed to hard code
// arr = [[1,2,3], [4,5,6], [7,8,9]]


// let arr = [];
// let count = 0;

// for(let i =0; i< 3; i++){
//     let innerArr = [];
//     for( let j =0; j< 3; j++){
//         count++;
//         innerArr.push(count);
//     }
//     arr.push(innerArr)
// } 
// console.log(arr)

// output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]




// question on arr
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//********************** */
// task 1: print elements row wise: 1,2,3,4,5,6,7,8,9
// for ( let i= 0; i< 3; i++ ){ // this for loop for array inside array
//     for(let j =0; j<3; j++){ // this for elements inside nested array
//         console.log(arr[i][j]);
//     }
// }
// output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


//************************************* */
// task 2: print elements colums wise: 1,4,7,2,5,8,3,6,9

// for( let i =0; i<3; i++){
//     for( let j =0; j<3; j++){
//         console.log(arr[j][i]);  // this print elements column wise
//     }
// }

// ouput:
// 1
// 4
// 7
// 2
// 5
// 8
// 3
// 6
// 9



//****************************** */
// // task 3: print diagonal elemts of square matix: 1,3,5,7,9
// for( let i =0; i<3; i++){
//     for( let j =0; j<3; j++){
//         if(i == j || i + j== 2){          // compares diagonal elements in array
//             console.log(arr[i][j])
//         }
//     }
// }

// //ouput:
// 1
// 3
// 5
// 7
// 9

//********************************** */
// task 4: print the non diagonal elements of the square matrix: 2, 4, 6, 8
// for( let i= 0; i< 3; i++){
//     for ( let j =0; j< 3; j++){
//         if( i == j || i +j ==2){  // compares non diagonal element 
//             continue;
//         }
//         else{
//             console.log(arr[i][j]) // this print non diagonal elements
//         }
//     }
// }


// second method 
// for( let i =0; i<3; i++){
//     for(let j =0; j<3; j++){
//         if(i !== j && i + j !==2){
//             console.log(arr[i][j]);
//         }
        
//     }
// }



// //output:
// 2
// 4
// 6
// 8

//************************************ */
// task 5: find the center element of square matrix: 5

// for( let i =0; i< 3; i++){
//     for( let j =0; j<3; j++){
//         if( i + j ==2 && i == j ){
//             console.log(arr[i][j])
//         }
//     }
// }

// // ouput: 5