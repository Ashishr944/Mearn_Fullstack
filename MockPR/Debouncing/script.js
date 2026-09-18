// 1. Debouncing
// Debouncing = execute the function only after the user stops triggering the event for a certain time.
// Example: Search box. You don't want to call the API on every keystroke.
// ->
// function debounce(callback, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             callback(...args);
//         }, delay);
//     };
// }

// function search(event) {
//     console.log("Searching:", event.target.value);
// }

// const searchInput = document.getElementById("search");

// searchInput.addEventListener(
//     "input",
//     debounce(search, 500)
// );




// 2. Throttling = execute the function at most once within a specified time interval.
// Example: Scroll event.

// function throttle(callback, delay) {
//     let lastTime = 0;
//     return function (...args) {
//         const currentTime = Date.now();
//         if (currentTime - lastTime >= delay) {
//             callback(...args);
//             lastTime = currentTime;
//         }
//     };
// }
// function handleScroll() {
//     console.log("Scrolling...");
// }
// window.addEventListener(
//     "scroll",
//     throttle(handleScroll, 1000)
// );






// const btn = document.getElementById("btn");
// const output = document.getElementById("output");
// function throttle(callback, delay) {
//     let lastTime = 0;
//     return function () {
//         const currentTime = Date.now();

//         if (currentTime - lastTime >= delay) {
//             callback();
//             lastTime = currentTime;
//         }
//     };
// }
// function handleClick() {
//     output.textContent = "Button clicked at " + new Date().toLocaleTimeString();
//     console.log("Function executed");
// }
// btn.addEventListener(
//     "click",
//     throttle(handleClick, 2000)
// );




// Throttling

// const btn = document.getElementById("btn");
// function throttle(callback, delay){
//     let lastTime = 0;
//     return function (){
//         const currentTime = Date.now();
//         if(currentTime - lastTime >= delay){
//             callback();
//             lastTime = currentTime;
//         }
//     };
// }

// function handleClick(){
//     output.textContent = "Button clicked at " + new Date().toLocaleDateString();
//     console.log("Function executed");
// }

// btn.addEventListener(
//     "click",
//     throttle(handleClick, 2000)
// );



















