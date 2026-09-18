// function A(){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     })
// }
// function B (){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(2)
//         }, 2000);
//     })
// }
// function C (){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(3)
//         }, 1000);
//     })
// }

// A().then(data=> console.log(data));
// B().then(data=> console.log(data));
// C().then(data=> console.log(data));


// async function execute(){
//     try{
//         const res1 = await A();
//         console.log(res1);
//         const res2 = await B();
//         console.log(res2);
//         const res3 = await C();
//         console.log(res3);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// execute(); 





// Promise.all takes an array of promised as arg and return a new promise
// the new promise resolve when all the listed promises are resolved and the
// array of their results become its result

// Promise either gives me the results of all the fulfilled promised in an array
// or the fist rejected promise


// const result =  Promise.all([
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej(2)
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej(3)
//         }, 1000);
//     }), 
// ]).then((item) => console.log(item))
// .catch((err) => console.log(err));


// console.log(result);






// Fetching multiple api's in parallel
// async function test(){

//     try{
//         let res = await Promise.all([
//             fetch("https://api.github.com/users/iliakan"),
//             fetch("https://api.github.com/users/iliaasdskan"),
//             fetch("https://api.github.com/users/iliadakan")
//         ])
//         const dataArray = await Promise.all(res.map(item => item.json())) // optimsed version of code
//         console.log(dataArray)


//         // res.map(async(item)=>{
//         // let data = await item.json();
//         // console.log(data)
//         // })

//     }
//     catch(err){
//         console.log(err)
//     }
// }
// test();





// 2 Promise.allSettled();
// Promise.allSettled([
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej(2)
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej(3)
//         }, 1000);
//     }), 
// ]).then((item) => console.log(item))
// .catch((err) => console.log(err));



// // ouput: 
// [
//     : 
//     {status: 'fulfilled', value: 1}
//     1
//     : 
//     {status: 'rejected', reason: 2}
//     2
//     : 
//     {status: 'rejected', reason: 3}
// ]




//3. Promise.race()
// Promise.race([
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             res("A")
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej("B")
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej("C")
//         }, 1000);
//     }), 
// ]).then((item) => console.log(item))
// .catch((err) => console.log(err));




//4. Promise.any()

// Promise.any([
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(1)
//         }, 3000);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             rej(2)
//         }, 200);
//     }),
//     new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(3)
//         }, 1000);
//     }), 
// ]).then((item) => console.log(item))
// .catch((err) => console.log(err));


// Output: 
// 3


// Example
async function testing(){
    try{
        let res = await Promise.any([
            fetch("https://jsonplaceholder.typicode.com/comments"),
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users")
        ])

        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
testing();