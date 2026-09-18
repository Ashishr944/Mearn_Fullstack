////////////////////// Object.keys()  and Object.values() /////////////////


// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// Object.keys(obj) -> gives you an array of keys 
// console.log(Object.keys(person1Obj));    //[ 'name', 'age', 'gender', 'key' ]

// Object.values(obj) -> gives you an array of values 
// console.log(Object.values(person1Obj));  //[ 'sourav', 20, 'male', 'value' ]

//to find the length of an object
// console.log(Object.keys(person1Obj).length);    //4



// for any given obj display all its values without using forin loop
// let person1Obj = {
//     name: "sourav",
//     age: 20,
//     gender: "male",
//     key: "value"
// }

// let keys = Object.keys(person1Obj);
// for(let i=0; i<keys.length; i++){
//     console.log(person1Obj[keys[i]])
    
// }


// find the sum of elements in the object
// let obj = {
//     mark1: 50,
//     mark2: 30,
//     mark3: 40,
//     mark4: 50,
// }

// let values = Object.values(obj);
// let sum = 0;
// for(let i=0; i<values.length; i++){
//     sum += values[i]
// }
// console.log(sum)


//// insert country: "India" inside address /////
// let data = {
//     address:{
//         city: "pune",
//         pin: 411014,
//     }
// }
// data.address.country = "India";
// console.log(data)


/////////////////////////   array of object ///////////////////


// let students = [
//     {id:1, name: 'Aman', marks: 82, gender: "male"},
//     {id:2, name: 'Sara', marks: 91, gender: "female"},
//     {id:3, name: 'Rohit', marks: 25, gender: "male"},
//     {id:4, name: 'Sachin', marks: 100, gender: "male"},
//     {id:5, name: 'Shreya', marks: 30, gender: "female"},
//     {id:6, name: 'Astha', marks: 99, gender: "female"},
// ]

// taks1: print the name of all the students

// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     console.log(obj.name)
// }
// task2: print the name of all female students
// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     if(obj.gender == 'female'){
//         console.log(obj.name)
//     }
// }

// task3: print the name of male student who got below 50

// for(let i=0; i<students.length; i++){
//     let obj = students[i];
//     if(obj.gender == 'male' && obj.marks <50){
//         console.log(obj.name)
//     }
// }



/////////////////// Object destructuring ////////////////////

// let user = {
//    name: "Prisha",
//    age: 23,
//    city: "Pune" 
// }

// // let name = user.name;
// // let age = user.age; 

// let {name, age} = user

// console.log(name)   //"Prisha"
// console.log(age)    //23


// let product = {
//     title: "Phone",
//     price: 30000
// }

// // destructuring using the name of some other variable
// let {title: productTitle, price: productPrice} = product;

// console.log(productTitle, productPrice); //Phone 30000



// let profile = {
//     username: "neo",
//     address:{
//         city: "Pune",
//         pin: 411057
//     }
// }

// let {address} = profile
// console.log(address.city)





















// let people = [
//   { name: "Alice", city: "NYC" },
//   { name: "Bob", city: "LA" },
//   { name: "Charlie", city: "NYC" }
// ];


// {
//   NYC: [{name:"Alice", city:"NYC"}, {name:"Charlie", city:"NYC"}],
//   LA: [{name:"Bob", city:"LA"}]
// }

// let result = {}
// for(let i=0; i<people.length; i++){
//     let city = people[i].city;
//     if(!result[city]){
//         result[city] = [];
//     }
//     result[city].push(people[i])
// }
// console.log(result)

















// wordCount("hello world hello")  →  { hello: 2, world: 1 }
// wordCount("The the THE")        →  { the: 3 }
// wordCount("one")                →  { one: 1 }


function wordCount(str){
    str = str.toLowerCase();
    let words = str.split(" ");
    let result = {}
    for(let i=0; i<words.length; i++){
        if(!result[words[i]]){
            result[words[i]] = 1
        }else{
            result[words[i]]++
        }
    }
    console.log(result)
}
wordCount("hello world hello")