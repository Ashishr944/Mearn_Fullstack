// //1. Square
// for( let i =0; i< 4; i++){
//     let row = "";
//     for(let j =0; j<4; j++){
//         row += " *"
//     }
//     console.log(row);
// }

// // output:
//  * * * *
//  * * * *
//  * * * *
//  * * * *








//2. rectangle
// let m =4
// let n =5
// for ( let i =0; i < m; i++){
//     let row = "";

//     for( let j = 0; j< n; j++){
//         row +=" *"
//     }
//     console.log(row);
// }

// //output:
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *













// //3. Rectangle using while loop

// let i =0;
// while(i<4){
//     let j =0;
//     let row = "";
//     while(j<4){
//         row +=" *"
//         j++
//     }
//     console.log(row);
//     i++;
// }

// //output:
//  * * * *
//  * * * *
//  * * * *
//  * * * *











// //4. Right angled triangle;
// for( let i =0; i<4; i++){
//     let row = "";
//     for(let j =0; j<=i; j++){
//         row+= " *";
//     }
//     console.log(row);
// }

// // // ouput:
// //  *
// //  * *
// //  * * *
// //  * * * *

// for(let i =0; i< 4; i++){
//     let row ="";
//     for(let j=0; j<=i; j++){
//         row += " #"
//     }
//     console.log(row);
// }






// //5. Opposite tight angled triagnle
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// // ouput:
//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// for(let i=1; i<=n; i++){
//     let row = "";

//     for(let j =1; j<=n-i; j++){
//         row += " ";
//     }

//     for(let j =1;  j <=i; j++){
//         row += "#"
//     }
//     console.log(row);
// }










// //6. Inverted right angled triangle
// let row = 4;
// for( let i =row; i>=1; i--){
//     row = "";
//     for (let j =1; j<=i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// // // ouput:
// * * * * 
// * * * 
// * * 
// *


// let n = 4;

// for (let i = n; i >= 1; i--) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }








// //7. triangle
// let n = 5;

// for(let i = 1; i <=n; i++){
//     let row = "";

//     for( let j =1; j <= n-i; j++){
//         row += " ";
//     }

//     for(let k = 0; k < 2 * i - 1; k++){
//         row += "*";
//     }

//     console.log(row);
// }

// // ouput:
//      *
//     ***
//    *****
//   *******
//  *********


// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j =1; j<=n -i; j++){
//         row += " "
//     }
//     for (let k =0; k< 2*i -1; k++){
//         row += "*"
//     }
//     console.log(row);
// }







// //8. hollow triangle without base
// let n =5;
// for(let i =1; i<= n; i++){
//     let row = "";
//     for( let j = 1; j <= n-i; j++){
//         row += " ";
//     }
//     for(let k = 1; k<= 2* i-1; k++){
//         if(k == 1 || k == 2 *i-1){
//             row += "*"
//         }
//         else{
//             row +=" ";
//         }
//     }
//     console.log(row);
// }

// // //ouput:
// //     *
// //    * *
// //   *   *
// //  *     *
// // *       *

// for(let i =1; i<= n; i++){
//     let row = "";
//     for(let j =1; j <=n -i; j++){
//         row += " ";
//     }
//     for(let k =1; k<=2 * i-1; k++){
//         if(k === 1 || k === (2*i - 1) || i === n){
//             row += "*";
//         }
//         else{
//             row += " "
//         }
//     }
//     console.log(row);
// }






// // 9. Diamond pattern
// let n = 4;

// let line = "";

// for(let i =1; i<=n; i++){

//     for(let j = 1; j <= n-i; j++){

//         line += " ";

//     }
//     for(let k = 1; k <= 2* i-1; k++){

//         line += "*";
//     }


//     line += "\n";
// }

// for( let i = n-1; i>= 1; i--){


//     for(let j = 1; j<= n-i; j++){

//         line += " ";

//     }


//     for(let k = 1; k <= 2* i -1; k++){

    
//         line += "*";

//     }
//     line += "\n";
    
// }
// console.log(line);

// // // output:
// //    *
// //   ***
// //  *****
// // *******
// //  *****
// //   ***
// //    *








// // 10. Hollow Square
// let n = 5;
// for( let i = 1; i<= n; i++){
//     let line = "";

//     for(let j =1; j<= n; j++){


//         if(i == 1 || i== n || j ==1 || j== n){
//             line += "*";
//         }else{
//             line += " ";

//         }
//     }

//     console.log(line);
// }

// // // ouput:
// // *****
// // *   *
// // *   *
// // *   *
// // *****







// //. Right angled trinagle of characters
// for( let i=0; i<4; i++){
//     let row = "";
//     for( let j =0; j<=i; j++){
//         row +=" " +String.fromCharCode(65+j);
//     }
//     console.log(row);
// }

// // // ouput:
// //  A
// //  A B
// //  A B C
// //  A B C D



// const students = [
//   { name: "Rahul", marks: 80 },
//   { name: "Priya", marks: 90 },
//   { name: "Aman", marks: 70 },
//   { name: "Neha", marks: 60 }
// ];

// // Step 1: filter students (example: marks >= 70)
// const filteredStudents = students.filter(student => student.marks >= 70);
// console.log(filteredStudents);

// // Step 2: get marks only
// const marksArray = filteredStudents.map(student => student.marks);
// console.log(marksArray);

// // Step 3: find total marks
// const total = marksArray.reduce((sum, mark) => sum + mark, 0);
// console.log(total);

// // Step 4: average
// const average = total / marksArray.length;

// console.log("Average Marks =", average);



// Question
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         // Print * on borders
//         if (j === 1 || j === i || i === n) {
//             pattern += "*";
//         } else {
//             pattern += " ";
//         }
//     }

//     console.log(pattern);
// }
//1// square
let n =4;
let m =6;
for(let i =0; i< n; i++){
    row = "";
    for(let i =0; i<n; i++){
        row+= "#";
    }
    console.log(row);
}
//2 // rectangle
for(let i =0; i<n; i++){
    let row = "";
    for(let j =0; j< m; j++){
        row += "*" 
    }
    console.log(row);
}
//3 // right angles
for(let i =0; i<n; i++){
    row = ""
    for(let j= 0; j<=i; j++){
        row+= "#";
    }
    console.log(row);
}
// 4 // opposite
for(let i =1; i<=n; i++){
    let row =""
    for(let j=1; j<=n -i; j++){
    row += " "
    }
    for(let j =1; j<=i; j++){
        row += "#"
    }
    console.log(row)
}


// 5// inverted right angled triangle
for(let i = n; i>=1; i--){
    row = "";
    for(let j =1; j<=i; j++){
        row += "*"
    }
    console.log(row);
}

//6// Pyramid
for(let i =1; i<=n; i++){
    let row = "";
    for(let j =1; j<= n-i; j++){
        row += " ";
    }
    for(let k =0; k<2 *i -1; k++){
        row += "*"
    }
    console.log(row);
}

// 7// hollow pyramid

for (let i = 1; i <= n; i++) {
    let pattern = "";
    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        pattern += " ";
    }
    // Print stars and hollow spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j === 1 || j === (2 * i - 1) || i === n) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    console.log(pattern);
}

