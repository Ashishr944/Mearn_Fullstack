// console.log(1);
// console.log(2);

// setTimer
// syntax
// setTimeout(callback, time);

// console.log("start")
// console.log(1);
// setTimeout(() => {
//     console.log("heavy operation")
// }, 2000)

// console.log("end");

// start        1       end         heavy operation



// sync opeation -> line by line execution of the code that is blocks the next line un til it finishes
// Async operation -> runs in the background that it its non-blocking in nature


// function greet(){
//     console.log("hello" + name)
// }
// setTimeout(greet(), 2000)

// with arguments
// setTimeout(() => greet("pranav"), 2000)

// console.log("start")
// setTimeout(() => {
//     console.log("time 1")
// }, 2000);
// setTimeout(() => {
//     console.log("time 2")
// }, 100);
// setTimeout(() => {
//     console.log("time 3")
// }, 0);
// console.log("end")

// start end time3 time2 time1

// eg
// console.log("start");
// setTimeout(() => {
//    console.log("time 1") 
// }, 1000);
// setTimeout(() => {
//     console.log("time 2")
// }, 0);
// setTimeout(() => {
//     console.log("time 3")
// }, 0);
// setTimeout(() => {
//     console.log("time 3")
// }, 0);
// setTimeout(() => {
//     console.log("time 5")
// }, 0);
// console.log("end");

// start end time3 time4 time1 time2





// setTimeout(function tick() {
//     alert(tick);
//     setTimeout(tick, 2000)
// }, 2000);

// console.log(
//     setTimeout(() => {
//         console.log("set");
//     }, 1000)
// )

// setTImeout returns you an if which can be later user to clear the time
// let timerId = setTimeout(() => {
//     console.log("hello")
// }, 1000);
// console.log(timerId);

// clearing the execution of the time
// clearTimeout(timerId);


//setInterval

// setInterval(()=>{
//     console.log("hello")
// }, 1000);

// // creating a infinite counter
// let count = 0
// setInterval(() =>{
//     count++;
//     console.log(count);
// }, 1000);






// function updateCLock(){
//     const now = new Date();
//     document.getElementById("clock").innerText = now.toLocaleTimeString();
// }
// // setInterval(updateCLock, 1000)


// let intervalid = setInterval(updateCLock, 1000);

// // stopping the clock after 5 seconds
// setTimeout(() =>{
//     clearInterval(intervalid);
//     console.log("clock is stoped")
// }, 5000)








let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let count =0;
timer.textContent = count;
let timerId = null;
startBtn.addEventListener("click", ()=>{
    if(timerId == null){

        timerId = setInterval(()=>{
            count++;
            timer.textContent = count;
        }, 1000)
    }   
})
stopBtn.addEventListener("click", ()=>{
    clearInterval(timerId);
    timerId = null;
})