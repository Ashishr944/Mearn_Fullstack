//1. Square
let n =4;
// for(let i =1; i<= n; i++){
//     let row = "";
//     for(let j =1; j<= n; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// OUtput:
// ****
// ****
// ****
// ****


//2.  right angled trianlge
// *
// **
// ***
// ****
// for(let i =1; i<= n; i++){
//     let row = "";
//     for(let j = 1; j<= i; j++){
//         row += "*"
//     }
//     console.log(row);
// }



//3. Inverted Right angled Triangle
// ****
// ***
// **
// *

// for(let i =n; i>= 1; i--){
//     let row = "";
//     for(let j =1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

//4. Number triangle
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// for(let i =1; i<= n ; i++){
//     let row = "";
//     for(let j =1; j<= i; j++){
//         row += j + " ";
//     }
//     console.log(row);
// }



// 5. Same number Triangle
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 

// for(let i =1; i<= n; i++){
//     let row = "";
//     for(let j =1; j<= i; j++){
//         row += i + " ";
//     }
//     console.log(row);
// }



//6. floyd's triangle
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 

// let count =1;
// for(let i = 1; i<= n; i++){
//     let row = "";
//     for(let j =1; j<= i; j++){
//         row += count + " ";
//         count++;
//     }
//     console.log(row);
// }



// 8. Pyramid pattern
//    * 
//   * * 
//  * * * 
// * * * * 

// for(let i = 1; i<=n; i++){
//     let row = "";

//     for(let j =1; j<=n -i; j++){
//         row += " ";
//     }
//     for(let j =1; j<= i; j++){
//         row += "* ";
//     } 
//     console.log(row);
// }

//9. full pyramid
//    *
//   ***
//  *****
// *******

// for(let i =1; i<=n; i++){
//     let row = "";
//     for(j =1; j<= n -i; j++){
//         row += " ";
//     }
//     for(let j = 1; j<= 2 * i -1; j++){
//         row += "*";
//     }
//     console.log(row);
// }

//10 inverted pyramid
// *******
//  *****
//   ***
//    *

// for(let i =n; i>= 1; i--){
//     let row = "";
//     for(let j =1; j<=n -i; j++){
//         row += " ";
//     }
//     for(let j =1; j<=2 * i -1; j++){
//         row += "*";
//     }
//     console.log(row);
// }



// 11. diamond
//    *
//   ***
//  *****
// *******
// *******
//  *****
//   ***
//    *
   
// for(let i =1; i<=n; i++){
//     let row = "";
//     for(j =1; j<= n -i; j++){
//         row += " ";
//     }
//     for(let j = 1; j<= 2 * i -1; j++){
//         row += "*";
//     }
//     console.log(row);
// }
// for(let i =n; i>= 1; i--){
//     let row = "";
//     for(let j =1; j<=n -i; j++){
//         row += " ";
//     }
//     for(let j =1; j<=2 * i -1; j++){
//         row += "*";
//     }
//     console.log(row);
// }



// 12. Hollow square
// * * * * 
// *     * 
// *     * 
// * * * * 

// for(let i =1; i<= n; i++){
//     let row = "";
//     for(let j =1; j<=n; j ++){
//         if(i ===1 || i === n || j ===1 || j ===n){
//             row += "* ";
//         }
//         else{
//             row += "  ";
//         }
//     }
//     console.log(row);
// }