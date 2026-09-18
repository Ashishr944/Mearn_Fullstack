let users = [
    {name: " Ashish", age : 23},
    {name: "A", age: 12},
    {name: "b", age: 54}

]
// console.log(users[0].name);
// //1. print all user
// for(let obj of users){
//     console.log(obj.name)
// }


//2. find user with age less than 22
for( let user of users){
    if( user.age < 22){
        console.log(user.name)
    }
}


//3. sum of ages
let total = 0;

for ( let user of users){
    total += user.age

}
console.log(total); // 89
let average = 
console.log("average" + total / users.length)


//4. 
