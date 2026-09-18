// // task 1
// for( let i =0; i < 4; i++){
//     row= "";
//     for( let j =0; j<4; j++){
//         row += " *"
//     }
//     console.log(row);
// }

// output:
//  * * * *
//  * * * *
//  * * * *
//  * * * *




// task2
// let n =5
// for( let i =0; i<= 4; i++ ){
//     let row = "";
//     for( let j =0; j<=n-i; j++){
//         row += "";
//     }
//     for( let k =0; k<=i; k++){
//         row +="*";
//     }
//     console.log(row)

// }



// outpt:
// *
// **
// ***
// ****
// *****




// task3;
// let n =5
// for( let i =0; i<= 4; i++ ){
//     let row = "";
//     for( let j =0; j<=n-i; j++){
//         row += " ";
//     }
//     for( let k =0; k<=i; k++){
//         row +="*";
//     }
//     console.log(row)

// }
// output:
//       *
//      **
//     ***
//    ****
//   *****



// // task 4;
// let n = 5;
// for( let i =1; i<= n; i++){
//     let row = "";
//     for(let j =1; j<=n-i; j++){
//         row += " ";
//     }
//     for( let k =0; k< 2*i-1; k++){
//         row += "*"
//     }
//     console.log(row);
// }

for(let i =1; i<=n; i++){
    let row = "";
    for(let j =1; j<=n; j++){
        row += " ";
    }
    for(let k = 0; k<2 * i -1; k++){
        row += "*"
    }
    console.log(row);
}

// // outpu:  
// //      *
// //     ***
// //    *****
// //   *******
// //  *********


// task 5
// let n =5
// for( let i =0; i<= 4; i++ ){
//     let row = "";
//     for( let j =0; j<=n-i; j++){
//         row += " ";
//     }
//     for( let k =0; k<=i; k++){
//         row +="* ";
//     }
//     console.log(row)

// }

// outpu:
//       * 
//      * * 
//     * * * 
//    * * * * 
//   * * * * * 


//task 6
// let n =5;
// for( let i =1; i<=n; i++){
//     let row = "";
//     for( j = 1; j <= n -i; j++){
//         row += " ";
//     }
//     for( let k =1; k<= 2*i-1; k++){
//         if( k ==1 || k== 2 * i-1 ){
//         row +="*";
//         }
//         else{
//             row += " "
//         }
//     }
//     console.log(row)
// }

// ouput:
//     *
//    * *
//   *   *
//  *     *
// *       *


let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i][j]);
        }
    } else {
        for (let j = arr.length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}