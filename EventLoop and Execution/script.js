
// console.log(1);
// Promise.resolve().then(function a(){
//     console.log(2);
//     setTimeout(function b() {
//         console.log(3)
//     }, 0);
// })

// setTimeout(function c() {
//     console.log(4);
//     Promise.resolve().then(function d(){
//         console.log(5)
//     })
    
// })
// console.log(6); 

// ouput;
// 1    6   2   4   5   3



// Starvation example -> 
console.log(1)
function again(){
    Promise.resolve().then(again)
}
again()

setTimeout(() => {
    console.log("Timer")
});
console.log(2)