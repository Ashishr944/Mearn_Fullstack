const users = [
  { id: 1, name: "Ashu", age: 22, salary: 50000, active: true, city: "Nagpur" },
  { id: 2, name: "Raj", age: 30, salary: 70000, active: false, city: "Mumbai" },
  { id: 3, name: "Amit", age: 25, salary: 60000, active: true, city: "Pune" },
  { id: 4, name: "Priya", age: 28, salary: 80000, active: true, city: "Nagpur" }
];

// 1.Get only names
// const result = users.map(user => user.name);
// console.log(result); // [ 'Ashu', 'Raj', 'Amit', 'Priya' ]





//2.Add 10% salary increment
// const result = users.map(user => {
//   return {
//     ...user,
//     salary: user.salary * 1.10
//   };
// });

// console.log(result); 
// ouput:
// [
//   {id: 1, name: 'Ashu', age: 22, salary: 55000.00000000001, active: true, city: 'Nagpur' },
//   {id: 2, name: 'Raj', age: 30, salary: 77000, active: false, city: 'Mumbai' },
//   {id: 3, name: 'Amit', age: 25, salary: 66000, active: true, city: 'Pune' },
//   {id: 4, name: 'Priya', age: 28, salary: 88000, active: true, city: 'Nagpur' }
// ]



//3. Convert names to Uppercase
// const result = users.map(user => user.name.toUpperCase());
// console.log(result); // [ 'ASHU', 'RAJ', 'AMIT', 'PRIYA' ]


//4. Create custom object
// const result = users.map(user => ({
//   username: user.name
// }));
// console.log(result);  

// Output: 
// [ { username: 'Ashu' }, { username: 'Raj' }, { username: 'Amit' }, { username: 'Priya' } ]





// 5.Add new field isAdult
const result = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));
console.log(result);

// Ouput:
// [
//   {
//     id: 1,
//     name: 'Ashu',
//     age: 22,
//     salary: 50000,
//     active: true,
//     city: 'Nagpur',
//     isAdult: true
//   },
//   {
//     id: 2,
//     name: 'Raj',
//     age: 30,
//     salary: 70000,
//     active: false,
//     city: 'Mumbai',
//     isAdult: true
//   },
//   {
//     id: 3,
//     name: 'Amit',
//     age: 25,
//     salary: 60000,
//     active: true,
//     city: 'Pune',
//     isAdult: true
//   },
//   {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur',
//     isAdult: true
//   }
// ]


//*********************************************************************************** */
// FILTER Questions
// 6. Get active users
// const result = users.filter(user => user.active);
// console.log(result);

// Ouput: 
// [
//   {
//     id: 1,
//     name: 'Ashu',
//     age: 22,
//     salary: 50000,
//     active: true,
//     city: 'Nagpur'
//   },
//   {
//     id: 3,
//     name: 'Amit',
//     age: 25,
//     salary: 60000,
//     active: true,
//     city: 'Pune'
//   },
//   {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur'
//   }
// ]


//7. Users age greater than 25
// const result = users.filter(user => user.age > 25);
// console.log(result);

// Outpu:
// [
//   {
//     id: 2,
//     name: 'Raj',
//     age: 30,
//     salary: 70000,
//     active: false,
//     city: 'Mumbai'
//   },
//   {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur'
//   }
// ]



//8. Salary above 60000
// const result = users.filter(user => user.salary > 60000);
// console.log(result);

// Output:
// [
//   {
//     id: 2,
//     name: 'Raj',
//     age: 30,
//     salary: 70000,
//     active: false,
//     city: 'Mumbai'
//   },
//   {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur'
//   }
// ]

// 9. Users from Nagpur
// const result = users.filter(user => user.city === "Nagpur");
// console.log(result);

// Output:
// [
//   {
//     id: 1,
//     name: 'Ashu',
//     age: 22,
//     salary: 50000,
//     active: true,
//     city: 'Nagpur'
//   },
//   {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur'
//   }
// ]

//10. Inactive users
// const result = users.filter(user => !user.active);
// console.log(result);

//Output:
// [
//   {
//     id: 2,
//     name: 'Raj',
//     age: 30,
//     salary: 70000,
//     active: false,
//     city: 'Mumbai'
//   }
// ]



//*********************************************************************************** */
// REDUCE Questions
// 11. Total salary
// const result = users.reduce((sum,user)=>{
//   return sum + user.salary;
// },0);
// console.log(result);

// output: 260000


// 12. Find maximum salary
// const result = users.reduce((max,user)=>{
//   return user.salary > max ? user.salary : max;
// },0);
// console.log(result);

// Output : 80000

//13. Count active users
// const result = users.reduce((count,user)=>{
//   return user.active ? count+1 : count;
// },0);
// console.log(result);

// Output: 3


// 14. Get array of names using reduce
// const result = users.reduce((arr,user)=>{
//   arr.push(user.name);
//   return arr;
// },[]);
// console.log(result);

//Output: [ 'Ashu', 'Raj', 'Amit', 'Priya' ]

// 15. Create object with id as key
// const result = users.reduce((obj,user)=>{
//   obj[user.id] = user;
//   return obj;
// },{});
// console.log(result);

// Output:
// {
//   '1': {
//     id: 1,
//     name: 'Ashu',
//     age: 22,
//     salary: 50000,
//     active: true,
//     city: 'Nagpur'
//   },
//   '2': {
//     id: 2,
//     name: 'Raj',
//     age: 30,
//     salary: 70000,
//     active: false,
//     city: 'Mumbai'
//   },
//   '3': {
//     id: 3,
//     name: 'Amit',
//     age: 25,
//     salary: 60000,
//     active: true,
//     city: 'Pune'
//   },
//   '4': {
//     id: 4,
//     name: 'Priya',
//     age: 28,
//     salary: 80000,
//     active: true,
//     city: 'Nagpur'
//   }
// }







// **************************************************************************************************
// combine questions
// 16. Active users names only
// const result = users
//   .filter(user => user.active)
//   .map(user => user.name);
// console.log(result); // Output: [ 'Ashu', 'Amit', 'Priya' ]

//17. Average salary
// const total = users.reduce((sum,user)=>{
//   return sum + user.salary;
// },0);
// const average = total / users.length;
// console.log(average); // Output: 65000

//18. Total salary of active users
// const result = users
//   .filter(user => user.active)
//   .reduce((sum,user)=>{
//       return sum + user.salary;
//   },0);
// console.log(result); // Output: 190000


// 19. Group users by city (Important Interview)
// const result = users.reduce((group,user)=>{
//    if(!group[user.city]){
//       group[user.city] = [];
//    }
//    group[user.city].push(user);
//    return group;
// },{});
// console.log(result);

// Output:
// {
//   Nagpur: [
//     {
//       id: 1,
//       name: 'Ashu',
//       age: 22,
//       salary: 50000,
//       active: true,
//       city: 'Nagpur'
//     },
//     {
//       id: 4,
//       name: 'Priya',
//       age: 28,
//       salary: 80000,
//       active: true,
//       city: 'Nagpur'
//     }
//   ],
//   Mumbai: [
//     {
//       id: 2,
//       name: 'Raj',
//       age: 30,
//       salary: 70000,
//       active: false,
//       city: 'Mumbai'
//     }
//   ],
//   Pune: [
//     {
//       id: 3,
//       name: 'Amit',
//       age: 25,
//       salary: 60000,
//       active: true,
//       city: 'Pune'
//     }
//   ]
// }


// 20. Count users by city
// const result = users.reduce((count,user)=>{
//    if(count[user.city]){
//       count[user.city]++;
//    }else{
//       count[user.city]=1;
//    }
//    return count;
// },{});
// console.log(result); // Output: { Nagpur: 2, Mumbai: 1, Pune: 1 }




//21. Remove duplicate objects by id
// const result = users.reduce((unique,item)=>{
//   if(!unique.find(obj => obj.id === item.id)){
//       unique.push(item);
//   }
//   return unique;
// },[]);
// console.log(result);




//22. Find user with highest salary
// const result = users.reduce((max,user)=>{
//   return user.salary > max.salary ? user : max;
// });
// console.log(result);

// Output:
// {
//   id: 4,
//   name: 'Priya',
//   age: 28,
//   salary: 80000,
//   active: true,
//   city: 'Nagpur'
// }



// 23. Sum product prices from cart
// const total = cart.reduce((sum,item)=>{
//    return sum + item.price;
// },0);
// console.log(total);



//24. Get only expensive products (>10000)
// const result = cart.filter(item => item.price > 10000);
// console.log(result);



// 25. Convert array to object
// const result = users.reduce((obj,user)=>{
//    obj[user.name] = user.age;
//    return obj;
// },{});
// console.log(result);