// let arr = [ 12,3,44,55,66,7];

// function doubleEchElement(arr){
//     // for(let i =0; i< arr.length; i++){
//     //     arr[i] = arr[i] *2;
//     // }

//     //or
//     let result = [];
//     for(let i =0; i< arr.length; i++){
//         result.push(arr[i]*2);
//     }
//     return result;

// }
// // doubleEchElement(arr);
// // console.log(arr); // ouput: [ 24, 6, 88, 110, 132, 14 ]

// //or
// let value = doubleEchElement(arr);
// console.log(value); // ouput: [ 24, 6, 88, 110, 132, 14 ]



//*************************************************** */

// let result= arr.map((item) =>{
//     return item *2});

// console.log(result); // [ 24, 6, 88, 110, 132, 14 ]

// let result= arr.map((item, idx) =>{
//     console.log(item, idx) });

// console.log(result);

// ************************************************************************************************
// MAP() is used when you want to create a new array by using the values of the original array
// 1. it does not affect the original array
// 2. it always returns a new array
// 3. the ouput length is usually the same as the input length


// eg1.
// const number = [12,3,4,5,6,7,8,4,3,]
// const doubled = number.map((item) => item *2);

// console.log(number);
// console.log(doubled);





// eg 2;
// const names = ["rahul", "anita", "meena"];
// const capitalNames = names.map((item)=> item.toUpperCase());
// console.log(capitalNames); // [ 'RAHUL', 'ANITA', 'MEENA' ]




// eg 3;
// // add $ sign in front of the prices
// const price = [ 110, 234, 543];
// const withSign = price.map((item) => "$"+item);
// console.log(withSign); // [ '$110', '$234', '$543' ]





// eg 4
// const students = [
//      {name: "Ashish", marks: 34},
//      {name: "Patil", marks: 54},
//      {name: "Rahul", marks: 67},
//      {name: "Aditya", marks: 23},

// ];

// Method 1 :

// const passFail = students.map((item)=>
// {
//     if( item.marks > 50){
//         return {students: item.name, result: "Pass"};
//     }
//     else{
//         return {students: item.name, result: "fail"};
//     }
// })
// console.log(passFail)

//or
// Method2:
// const passFail = students.map((item) =>{
//     return{
//         students: item.name, result : item.marks > 50 ? "Pass" : "Fail"
//     }
// });
// console.log(passFail);




// *********************************************
// filter() is used when you wank to keep only that elements that satisfy the condidtion
// 1. it returns a new array
// 2. the o/p may have fewer or the number of elements
// 3. it does not transform the value, only choses which one stays
// let arr = [1,2,3,4,5,6];

// let evenElements = arr.filter((item) => {
//     if(item % 2 == 0){
//         return item;
//     }
// });
// console.log(evenElements);






// eg : give me list of all elements above 50
// let arr = [50, 20,45,67,44,34];
// // method1:
// // let  above = arr.filter((item) => {

// //     if(item >=50){
// //         return item;
// //     }
// // });


// //or
// // method 2:
// let above = arr.filter((item) => item >50);
// console.log(above);



// eg
// give me list of active user objects
const users =[
    {name: "Ashu", isActive: true},
    {name: "Ravi", isActive: false},
    {name: "Kiran", isActive: true}
]

let activeUsers = users.filter((item) => item.Active)

console.log(activeUsers)