// // cons/ disadvantage of OBJ
// // the properties in obj are not ordered 
// // we cannot directly traverse an object 
// // keys in obj are of 2 data types symbol and strings we cannot have anyother dataype



// // let obj ={
// //     name: "ashish", age: 21, city: "Pune", 
// // }

// // obj.name;


// //******************************************************* */
// // MAP
// // -> Amap is built in collection of key value pair but unlike objects keys here
// // -> can be of my any data type. MAP also preserved the insertion order when in iterated

// // new key is ued to create blueprints

// let map = new Map();



// //***************************** */
// // .set(key, value) is used to insert values insside map
// //***************************** */

// map.set("name", "Ashish"); //Map(1) { 'name' => 'Ashish' }
// map.set("age",20);  // Map(2) { 'name' => 'Ashish', 'age' => 20 }
// map.set("name","Raju") // Map(2) { 'name' => 'Raju', 'age' => 20 }
// console.log(map);


// //********************************* */
// // .has(key) -> check if that perticular key exists or not 
// //********************************* */
// console.log(map.has("name")); // true
// console.log(map.has("number")) // false







// //********************************* */
// // .get(key): let you acces the value
// //********************************* */
// console.log(map.get("age")) // 20
// console.log(map.get("name")); // Raju



// //********************************* */
// // .size gives you the length of your map
// //********************************* */
// console.log(map.size) //2




// //********************************* */
// //.delete(key)-> alloes you to remove a value
// // it also returns true if deletion has happend and false if the key does not exist
// //********************************* */

// map.set("temp", "temp value"); //{ 'name' => 'Raju', 'age' => 20, 'temp' => 'temp value' }
// console.log(map);
// map.delete("temp");  // { 'name' => 'Raju', 'age' => 20 }
// console.log(map);






// //********************************* */
// // .clear() used to clear a map
// //********************************* */
// map.clear();
// console.log(map); // {}




// //********************************* */
// const userMap = new Map();
// const user1 = {id: 1, name: "ashish"};
// const user2 = { id:1, name: "Pranav"}

// userMap.set(user1, "Frontend Student");
// userMap.set(user2, "Backend Student");
// userMap.set(101, "Batch A");
// userMap.set(true, "Active Batch");

// console.log(userMap) 
// // output: 
// // Map(4) {
// //   { id: 1, name: 'ashish' } => 'Frontend Student',
// //   { id: 1, name: 'Pranav' } => 'Backend Student',
// //   101 => 'Batch A',
// //   true => 'Active Batch'
// // }

// console.log(userMap.get(user1)); // Frontend Student
// console.log(userMap.get(101)); // Batch A
// console.log(userMap.get(true)); // Active Batch


// //********************************* */


// // task: count the frequecy in map
// const words = ['js', 'react', 'js', 'node', 'react', 'js'];

// const freqMap= new Map();

// for(word of words){
//     freqMap.set(word, (freqMap.get(word) || 0) + 1)
// }
// console.log(freqMap)  //   { 'js' => 3, 'react' => 2, 'node' => 1 }




// //********************************* */

// this is another way of creating your map, where the key value paird are in an array
// // [['pen',20], ['notebook', 10],['makrket', 5]]
// const inventory = new Map([
//     ['pen', 20],
//     ['notebook', 10],
//     ['market', 5]
// ]);

// // // 1st:
// // for( item of inventory){
// //     console.log(item);
// // }

// // output:
// // [ 'pen', 20 ]
// // [ 'notebook', 10 ]
// // [ 'market', 5 ]


// // 2nd:
// // rember to destructure your array inside your for of loop
// for(const[key, value] of inventory){
//     console.log(key,value)
// }

//ouput:
// pen 20
// notebook 10
// market 5


// //********************************* */

//set: 
// its a built in collection that stores only unique meaning value, meaning duplicates are ignored.
// it also preserves the insertion ored during iteration

// //********************************* */

// const set = new Set();

// // .add( item) adds the items inside set, if the item already exists it will ignore that item
// set.add(20);
// set.add(10);
// set.add(29);
// set.add(34)
// console.log(set); // { 20, 10, 29, 34 }

// // .has(item) checks if that item exists or not 
// console.log(set.has(10)); // true

// // .delete(item) deletes the value from set
// set.delete(34);
// console.log(set); // { 20, 10, 29 }

// // .size gives the size of the set
// console.log(set.size); // 3

// // set.clear() cleares the set
// set.clear();
// console.log(set);




// task: removing duplicates in array
// method 1:
let username = ["pranav", "raju", "sneha", "raju", "sneha", "pranav"];
let set = new Set();
for( const item of username){
    set.add(item);
}
console.log(set); // { 'pranav', 'raju', 'sneha' }

// method 2 ( ideal)
let set2 = new Set(username);
console.log(set2) // { 'pranav', 'raju', 'sneha' }
console.log([...set2]) // [ 'pranav', 'raju', 'sneha' ]