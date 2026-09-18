
// function getCheese(callback){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const cheese = "🧀";
//             console.log("here is the:", cheese);
//             res(cheese);
//         },2000)

//     })
// }

// function makeDough(cheese, callback){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             const dough = cheese +"🫕";
//             console.log("here is the:", dough);
//             // res(dough);
//             // rej("Dought is expired")
//         },2000)
//     })
// }

// function makePizza(dough, callback){
//     return new Promise((res, rej)=>{ 
//         setTimeout(()=>{
//             const pizza = dough + "🍕";
//             console.log("here is the:", pizza);
//             res(pizza);
//         },2000)
//     })

// }

// getCheese((cheese) =>{
//     return new Promise((res, rej)=>{ 
//         makeDough(cheese, (dough)=>{
//             makePizza(dough, (pizza) =>{
//                 console.log("got my pizza", pizza)
//             })
//         })
//     })
// })


// sync function func(){}
// const func = async() =>{}

// async function func(){
//     const res1 = await getCheese();
//     console.log("here is my cheese: ", res1)
//     const res2 = await makeDough(res2);
//     console.log("here is my dough: ", res2);
//     const res3 = await makePizza(res3);
//     console.log("here is my pizza");
// }
// func()


// the word async before a function means: a function always returns a promise.
// await works only inside async function
// await makes js wait until the promise settles and return its result
// that is it suspend the function execution until the promise settles and ressumes it with the result




// async function func(){
//     try{

//         const res1 = await getCheese();
//         console.log("here is my cheese: ", res1)
//         const res2 = await makeDough(res1);
//         console.log("here is my dough: ", res2);
//         const res3 = await makePizza(res3);
//         console.log("here is my pizza");
//     }
//     catch(error){
//         console.log("error", error)
//     }
// }
// func()



// function fetchData(){
//     let flag = true;
//     return new Promise((res, rej) =>{
//         setTimeout(()=>{
//             if(flag){
//                 res({message:"data fetched successfully", data :[1,2,3,4,5,6]})
//             }else{
//                 rej({message : "error in fetching data"})
//             }
//         }, 1000)
//     })
// }

// fetchData().then(data=>{
//     console.log(data.data);
// }).catch(error =>{
//     console.log(error.message)
// })


// async function fetching(){
//     try{
//         const res = await fetchData;
//         console.log(res.data);
//     }
//     catch(errr){
//         console.log(errr.message)
//     }
// }
// fetching();