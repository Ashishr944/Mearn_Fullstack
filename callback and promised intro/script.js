// function A(callback){

// const { useCallback } = require("react");

//     setTimeout(() => {
//         console.log(1);
//         if(callback) callback();
//     }, 2000);
// }


// function B(callback){
//     setTimeout(() => {
//         console.log(2);
//         if(callback) callback();
//     }, 2000);
// }


// function C(){
//     setTimeout(() => {
//         console.log(3);
//     }, 2000);
// }

// // try to run the first setTimeout then second then third 
// A(() =>{
//     B(() =>{
//         C()
//     })
// });

// Async operations are getting executed in a particular order
// the next async operation is dependent on the execution of the
// 1St async operation


// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log("here is the:", cheese);
//         useCallback(cheese);
//     },2000)
// }

// function makeDough(cheese, callback){
//     setTimeout(()=>{
//         const dough = cheese +"🫕";
//         console.log("here is the:", dough);
//         useCallback(dough);
//     },2000)
// }

// function makePizza(dough, callback){
//     setTimeout(()=>{
//         const pizza =pizza + "🍕";
//         console.log("here is the:", pizza);
//         useCallback(pizza);
//     },2000)
// }

// getCheese((cheese) =>{
//     makeDough(cheese, (dough)=>{
//         makePizza(dough, (pizza) =>{
//             console.log("got my pizza", pizza)
//         })
//     })
// })




// Above callback hell
// promises -> is a special object that represent the eventual complition or failue
// of an async operation and resulting value
// promise creation
// const promise1 = new Promise(function(resolve, reject){
//     // do sync task
//     // DB calls, cryptography etc
//     setTimeout(()=>{
//         console.log("Async task is completed");

//         // you have to call resolve here to connect with them
//         resolve;
//     }, 1000);
// })
// // consuming a promse
// promise1.then(function(){
//     // this will only be prited after the promise is done execution
//     console.log("Promise is resolve");
// })


// data consumption
// const promise2 = new Promise(function(resolve, reject){
//     // do sync task
//     // DB calls, cryptography etc
//     setTimeout(()=>{
//         console.log("Fetching Data");
//         data = {name:"pranav", age: 20}

//         // you have to call resolve here to connect with them
//         resolve(data);
//     }, 1000);
// }).then(function(user){
//     // console.log(user)
//     console.log("Promise is resolved", user.name);
// })


// reject and settle
// data consumption

// const promise3 = new Promise(function(resolve, reject){
//     // do sync task
//     // DB calls, cryptography etc
//     setTimeout(()=>{
//         console.log("Fetching Data");
//         let error = false;

//         if(!error){
//             data = {name:"pranav", age: 20}

//             resolve(data);
//         }else{
//             reject("something went wrong");
//         }
//     }, 1000);
// }).then(function(user){
//     // console.log(user)
//     console.log("Promise is resolved", user.name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("promise has executed")
// })



// const promise3 = new Promise(function(resolve, reject){
//     // do sync task
//     // DB calls, cryptography etc
//     setTimeout(()=>{
//         console.log("Fetching Data");
//             data = {name:"pranav", age: 20}

//             resolve(data);
//     }, 1000);
// }).then(function(user){
//     // console.log(user)
//     console.log("Promise is resolved", user.name);
//     return user;
// }).then((user)=>{
//     console.log(user.name);
//     return user;
// }).then((user)=>{
//     console.log(user.age);
// })




function getCheese(callback){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const cheese = "🧀";
            console.log("here is the:", cheese);
            res(cheese);
        },2000)

    })
}

function makeDough(cheese, callback){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            const dough = cheese +"🫕";
            console.log("here is the:", dough);
            res(dough);
        },2000)
    })
}

function makePizza(dough, callback){
    return new Promise((res, rej)=>{ 
        setTimeout(()=>{
            const pizza = dough + "🍕";
            console.log("here is the:", pizza);
            res(pizza);
        },2000)
    })

}

getCheese((cheese) =>{
    return new Promise((res, rej)=>{ 
        makeDough(cheese, (dough)=>{
            makePizza(dough, (pizza) =>{
                console.log("got my pizza", pizza)
            })
        })
    })
})



getCheese().then((cheese)=>{
    console.log("here is the ", cheese);
    return makeDough(cheese)
}).then((dough)=>{
    console.log("here is my dough", dough)
    return makePizza(dough)
}).then((pizza)=>{
    console.log("here is the pizza", pizza)
}).catch(err =>{
    console.log(err);
}).finally(()=>{
    console.log("pizza is ready");
})