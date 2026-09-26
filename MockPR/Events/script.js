// 1. Event Bubbling
// Event bubbling is the process in which an event starts from the target element and propagates upward through its parent elements.
// The order is:
// Child → Parent → Grandparent → Document


document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});



// 2. Event Capturing
// Event capturing is the opposite direction of bubbling.
// The event travels from the outermost parent toward the target element.
// The order is:
// Document → Parent → Child

document.getElementById("parent").addEventListener(
    "click", () => {
        console.log("Parent");
    },
    true
);
document.getElementById("child").addEventListener("click", () => {
    console.log("Button");
});






// 3. Event Delegation
// Event delegation is a technique where we attach a single event listener to a parent element instead of adding separate listeners to every child.
// It works mainly because of event bubbling.
document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Clicked:", event.target.textContent);
    }
});



