// NOte : when you pass callback function as a function declaration 
// the this will be your window object
// but you can fix using an arrow function

// const user = {
//     name : "Kavita",
//     hobbies : ["reading", "coding", "gaming"],

//     // showHobbies : function(){
//     //     this.hobbies.forEach(function(hobby){
//     //         console.log(this)
//     //         console.log(this.name + " like " + hobby)
//     //     })
//     // }

//     showHobbies : function(){
//         this.hobbies.forEach((hobby) => {
//             console.log(this.name + " likes " + hobby);
//         })
//     }
// }
// user.showHobbies();






// Constructor function
// A Construcotr function is a special function that serves that as a blueprint for creating multiple object
// with similar properties and behaviors


// new Keyword
// the new keyword helps in creating a new instance for the constuctor function

// function Person(name, age, city){
//     this.name = name,
//     this.age = age,
//     this.city = city
// }
// const person1 = new Person("Pranav", 20, "pune");
// const person2 = new Person("ashish", 34, "Mehkar");
// const person3 = new Person("Raje", 34, "Buldhana");
// const person4 = new Person("Ashish4", 45, "CSN");

// person1.name = "Arav";  // Update the value of name in object
// console.log(person1, person2, person3, person4);

// example
// function User(username, email, role = "user"){
//     this.username = username || "Guest",
//     this.email = email,
//     this.role = role || "user",
//     this.isActive = true,
//     this.accountCreated = Date.now()
// }
// let user1 = new User('nova', 'rova@gmail.com', )
// console.log(user1);
// console.log(Date.now);

// //new date 
// let d = new Date();
// console.log(d.getMonth());





// Attaching method in constructor
// function Calculator(brand){
//     this.brand = brand;
//     this.currentValue = 0;


//     // itance methods
//     this.add = function(num){
//         this.currentValue = num + this.currentValue
//         return this.currentValue
//     }

//     this.reset = function(){
//         this.currentValue= 0;

//     }
// }
// let calc1 = new Calculator("casio");
// console.log(calc1.add(5)); // 5
// console.log(calc1.add(5)); // 10
// calc1.reset(); // undefined
// console.log(calc1.add(6)); // 6



// user object in default method

// task create a contructor function Rectangle which takes length and width as input 
// it has 3 methods
// 1.getArea() -> return the area of the rectangle
// 2. getPerimeter -> return the perimeter of the rectangle
// 3. isSquare -> return true if its a square and false if its not



// Rectanle contructor and methods
// function Rectangle(length, width){
//     this.length = length;
//     this.width = width;

//     // gives are 
//     this.getArea = function(){
//         return this.length * this.width;
//     }

//     // gives perimeter
//     this.getPerimeter = function(){
//         return  2 *(this.length + this.width);
//     }

//     // return true if it is square
//     this.isSquare = function(){
//         if(this.length == this.width){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// }
// const rec1 = new Rectangle(12, 34);
// console.log(rec1.getArea()); // 408
// console.log(rec1.getPerimeter()); // 92


// Bank account contructor function
function BankAccount(owner, balance){
    this.owner = owner;
    this.balance = balance;
    this.checkBalance = function(){
        return this.owner + " balance is: " + this.balance;
    }
    this.deposite = function(amount){
        this.balance = this.balance + amount;
        return this.balance
    }

    this.withDraw = function(amount){
        if(amount < this.balance){
             this.balance = this.balance - amount;
             return this.balance;
        }
        else{
            return "insufficient balance";
        }
    }
}
const acc1 = new BankAccount("Ashish", 10000);
// console.log(acc1.checkBalance()); // Ashish balance is: 10000
// console.log(acc1.deposite(5000)); // 15000
// console.log(acc1.checkBalance()); // Ashish balance is: 15000
// console.log(acc1.withDraw(4000)); // 11000
// console.log(acc1.withDraw(60000)) // Insufficiate balance


const deposite = acc1.deposite.bind(acc1);
// deposite(10000);
console.log(acc1.checkBalance());


