// // 1. Promise.all()
// // Runs multiple promises and returns results only when all promises succeed.
// // ->
// const p1 = Promise.resolve("Apple");
// const p2 = Promise.resolve("Banana");
// const p3 = Promise.resolve("Mango");
// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // Output:
// // ["Apple", "Banana", "Mango"]


// // If one promise fails, Promise.all() fails.
// // -> 
// const p1 = Promise.resolve("Apple");
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve("Mango");
// Promise.all([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));


// // Output:
// // Error



const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Banana");
const p3 = Promise.resolve("Mango");

Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
});
























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 2. Promise.allSettled()
// // Waits for all promises, whether they succeed or fail.
// // ->
// const p1 = Promise.resolve("Apple");
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve("Mango");

// Promise.allSettled([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     });


// // Output:
// // [
// //     { status: "fulfilled", value: "Apple" },
// //     { status: "rejected", reason: "Error" },
// //     { status: "fulfilled", value: "Mango" }
// // ]
// // Use when: You want the result of every operation, including failed ones.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 3. Promise.race()
// // Returns the result of the first promise that settles.
// // ->

// const p1 = new Promise((resolve) => {
//     setTimeout(() => resolve("First"), 2000);
// });
// const p2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Second"), 1000);
// });
// Promise.race([p1, p2])
//     .then((result) => {
//         console.log(result);
//     });


// // Output:
// // Second

// // Because p2 finishes first.
// // If the first promise to settle is rejected, race() rejects.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // 4. Promise.any()
// // Returns the first successfully fulfilled promise.
// // ->
// const p1 = Promise.reject("Error 1");
// const p2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Success 2"), 2000);
// });

// const p3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Success 3"), 1000);
// });

// Promise.any([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // Output:
// // Success 3

// // Even though p1 failed, Promise.any() waits for a successful promise.
// // If all promises reject, it gives an AggregateError.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // 5. Promise.resolve()
// // Creates a fulfilled Promise.
// // ->

// const promise = Promise.resolve("Hello");

// promise.then((result) => {
//     console.log(result);
// });

// // Output:
// // Hello

// // It is also useful for converting a normal value into a promise:
// // ->
// const value = 100;

// Promise.resolve(value)
//     .then((result) => {
//         console.log(result);
//     });

// // Output:
// // 100



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // 6. Promise.reject()
// // Creates a rejected Promise.
// // ->

// const promise = Promise.reject("Something went wrong");

// promise.catch((error) => {
//     console.log(error);
// });

// // Output:
// // Something went wrong















// async function fetchData() {
//     try {
//         const [users, posts, comments] = await Promise.all([
//             fetch("https://jsonplaceholder.typicode.com/users"),
//             fetch("https://jsonplaceholder.typicode.com/posts"),
//             fetch("https://jsonplaceholder.typicode.com/comments")
//         ]);

//         const usersData = await users.json();
//         const postsData = await posts.json();
//         const commentsData = await comments.json();

//         console.log(usersData);
//         console.log(postsData);
//         console.log(commentsData);

//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// fetchData();