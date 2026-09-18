// let count = 0;
// for( let i =0; i <3; i++){
//     for( let j = 0; j <3; j++){
//         count++;
//     }
// }
// console.log(count); //9

// if the outer loop is running n number of times and iner loop is  runnig m number of times then the whole nested loop runs n*m numbers of times.

// task1;
//print table from 0 to 5
//1*1 =1
//1*2 =2
//.
//.
//.
//5*1=5
//.
//.
//.
//5*10=50


// for( let i =1; i<=5; i++){
//     for( let j = 1; j <=10; j++){
//         console.log(i + " x " + j + "=" +(i*j));
//         console.log( )
//     }
// }

// tast 2
// print the pattern
// # # # #
// # # # #
// # # # #
// # # # #

// let a = 4;
// let b = 4;
// for( let i = 1; i<= a; i++){
//     let row ="";
    
//     for( let j =1; j<=b; j++){
//         row += "#";
//         }
//         console.log(row);
// }

/// task print martrix element address one by one
// let a = 4;
// let b = 4;
// for (let i= 0; i<=a; i++){
//     let row = "";
//     for( let j= 0; i<=b; j++){
//         row = row + i + "" + j + "";
//     }
//     console.log(row);
// }

// task print the bellow pattern using nested while loop
// # # # #
// # # # #
// # # # #
// # # # #



// let i = 0;
// while ( i < 4){
//     let j = 0;
//     let row = "";
//     while( j< 4){
//         row += " #"
//         j++;
//     }
//     console.log(row);
//     i++;
// }



// print pattern
// *
// **
// ***
// ****

//method 1:
// let i = 1;
// while ( i <= 5){
//     let j = 1;
//     let row = "";
//     while( j<= i){
//         row += " *"
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// // method 2:
// let row = "";
// for ( let  i = 0; i< 5; i++){
//     row += " *";
//     console.log(row);
// }


// let row = "";
// for ( let i = 0; i<=-5; i++){
//     row -= " *";
//     console.log(row);
// }

// task inverted triangle
// let n=5;
// for (let i = n; i >= 1; i--) {
//     let row = "";
    
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
    
//     console.log(row);
// }



// TASK: print pattern 
// A 
// AB 
// ABC 
// ABCD

// let n=5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
    
//     for (let j = 0; j <i; j++) {
//         row += String.fromCharCode( 65 + j);
//     }
    
//     console.log(row);
// }




// wordCount("hello world hello")  →  { hello: 2, world: 1 }
// wordCount("The the THE")        →  { the: 3 }
// wordCount("one")                →  { one: 1 }


// function wordCount(str){
//     str = str.toLowerCase();
//     let words = str.split(" ");
//     let result = {}
//     for(let i=0; i<words.length; i++){
//         if(!result[words[i]]){
//             result[words[i]] = 1
//         }else{
//             result[words[i]]++
//         }
//     }
//     console.log(result)
// }
// wordCount("hello world hello")




let people = [
  { name: "Alice", city: "NYC" },
  { name: "Bob", city: "LA" },
  { name: "Charlie", city: "NYC" }
];


// {
//   NYC: [{name:"Alice", city:"NYC"}, {name:"Charlie", city:"NYC"}],
//   LA: [{name:"Bob", city:"LA"}]
// }

let result = {}
for(let i=0; i<people.length; i++){
    let city = people[i].city;
    if(!result[city]){
        result[city] = [];
    }
    result[city].push(people[i])
}
console.log(result)