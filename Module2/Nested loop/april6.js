// for( let i =0; i< 2; i++){
//     for( let j =0; j< 2; j++){
//         console.log("Hello");  // 4 times
//     }
// }


// output:
// Hello
// Hello
// Hello
// Hello





// if ouyter loop is running n number of times and inner loop is running m number of time
// then the whole nested loop runs n*m numbers of times






// print table 
// for ( let i =1; i <=5; i++){
//     for ( let j=1; j<=10; j++){
//         console.log( `${i} X ${j} = ${i*j} `)
//     }
// }
// ouput:
// 1 X 1 = 1 
// 1 X 2 = 2 
// 1 X 3 = 3 
// 1 X 4 = 4 
// 1 X 5 = 5 
// 1 X 6 = 6 
// 1 X 7 = 7 
// 1 X 8 = 8 
// 1 X 9 = 9 
// 1 X 10 = 10 
// 2 X 1 = 2 
// 2 X 2 = 4 
// 2 X 3 = 6 
// 2 X 4 = 8 
// 2 X 5 = 10 
// 2 X 6 = 12 
// 2 X 7 = 14 
// 2 X 8 = 16 
// 2 X 9 = 18 
// 2 X 10 = 20 
// 3 X 1 = 3 
// 3 X 2 = 6 
// 3 X 3 = 9 
// 3 X 4 = 12 
// 3 X 5 = 15 
// 3 X 6 = 18 
// 3 X 7 = 21 
// 3 X 8 = 24 
// 3 X 9 = 27 
// 3 X 10 = 30 
// 4 X 1 = 4 
// 4 X 2 = 8 
// 4 X 3 = 12 
// 4 X 4 = 16 
// 4 X 5 = 20 
// 4 X 6 = 24 
// 4 X 7 = 28 
// 4 X 8 = 32 
// 4 X 9 = 36 
// 4 X 10 = 40 
// 5 X 1 = 5 
// 5 X 2 = 10 
// 5 X 3 = 15 
// 5 X 4 = 20 
// 5 X 5 = 25 
// 5 X 6 = 30 
// 5 X 7 = 35 
// 5 X 8 = 40 
// 5 X 9 = 45 
// 5 X 10 = 50 




// task
// for(let i =0; i<4; i++){
//     let row = "";

//     for( let j =0; j<4; j++){
//         row +=" #"
//     }
//     console.log(row);
// }


// ouput:
//  # # # #
//  # # # #
//  # # # #
//  # # # #

//task 2
// let a =4;
// let b =6;
// for( let i =0; i<a; i++){
//     row = ""
//     for (let j =0; j<b; j++){
//         row += " #"
//     }
//     console.log(row);
// }
// ouput:
//  # # # # # #
//  # # # # # #
//  # # # # # #
//  # # # # # #





// const arr = [ 1, 2, 3, 4, 6];
// arr[0]= 6 // [ 6, 2, 3, 4, 6 ]
// // arr = 6 // error
// arr.push(7) // [ 6, 2, 3, 4, 6, 7 ]
// console.log(arr)



// using while loop
//task

// let i =0;
// while(i<4){
//     let j =0;
//     let row = ""
//     while(j<4){
//         row += " #"
//         j++;
//     }
//     console.log(row);
//     i++;

// }

// ouput:
//  # # # #
//  # # # #
//  # # # #
//  # # # #




// // task 3

// for( let i =0; i<4; i++){
//     let row = "";
//     for( let j =0; j<=i; j++){
//         row +=" #"
//     }
//     console.log(row)
// }
// ouput:
//  #
//  # #
//  # # #
//  # # # #




// task 4

// for( let i =0; i<4; i++){
//     row = ""
//     for(let j=i; j<4; j++){
//         row += " #"
//     }
//     console.log(row);
// }
// output:
//  # # # #
//  # # #
//  # #
//  #




// task

// for( let i =0; i< 4; i++){
//     let row = "";
//     for(let j =0; j<=i; j++){
//         row += String.fromCharCode(65+j);

//     }
//     console.log(row);
// }
// ouput:
// A
// AB
// ABC
// ABCD