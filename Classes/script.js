// // each object instance created using construcor function gets its own instance copy of every method
// // this 
// function car(brand, model){
//     this.brand = brand;
//     this.model = model;
// }


// car.prototype.displayInfo = function(){
//     return this.brand + " " + this.model
// }
// let car1 = new car("Maruti", "swift");
// let car2 = new car("Maruti", "Dezie");
// let car3 = new car("Maruti", "Ciaz");
// let car4 = new car("Maruti", "Maruti");
// console.log(car1, car2, car3, car4)








//  Classes vs Constructor in JS
// function animal(name){
//     this.name = name;
//     this.species = "Generic Animal"
// }
// animal.prototype.makeSound = function(){
//     return this.name + " make a sound";
// }
// animal.prototype.sleep= function(){
//     return this.name + " is sleeping";
// }
// animal.prototype.setAge = function(value){
//     return this.age = value;
// }
// const dog = new animal("buddy");
// console.log(dog.makeSound());
// console.log(dog.sleep());
// dog.setAge(4);
// console.log(dog.age);
// console.log(dog);






// * Classes

// class user{
//     constructor(username, email){
//         console.log("hi")
//         this.username = username;
//         this.email = email;
//     }
//     greet(){
//         console.log(`Hello ${this.username}`);
//     }
// }
// const user1 = new user('Ashish', 'ashish@gmail.com');
// console.log(user1);
// console.log(user1.username);
// console.log(user1.email);
// user1.greet();



// Class and protype method


// if marks is above 60 -> Grade is C
// if marks is above 80 -> Grade is B
// if marks is above 90 -> Grade is A
// if marks is below 60 -> Grade is D
// class student{
//     section = "c";
//     constructor(name, age, marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//         if(this.marks > 60){
//             this.grade = "C"
//         }
//         else if(this.marks > 80){
//             this.grade = "B"
//         }
//         else if(this.marks > 90){
//             this.grade = "A"
//         }
//         else{
//             this.grade = "D"
//         }

//     }
//     display(){
//             console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
//     }
// }
// let student1 = new student("Ashish", 20, 67);
// let student2 = new student("Ar", 23, 83);
// let student3 = new student("Br", 21, 91);
// let student4 = new student("Cr", 22, 59);
// // console.log(student1);
// student1.display();
// student2.display();
// student3.display();
// student4.display();


// Dynamic Property and assignment

// Getter and Setter
// class user {
//     constructor(name, age){
//         this._name = name;
//         this._age = age;

//     }
//     get age(){
//         return this._age;
//     }
//     set age(value){
//         if(value < 0 || value > 120){
//             console.log("Invalid age");
//         }
//         else{
//             this._age = value
//         }
//     }
// }

// const user1 = new user( "pranav", 50);
// user1.age = 500;
// console.log(user1);
// console.log(user1._age); // 20
// console.log(user1.age); // 20 -> get age()
// user1._age = 25; 
// user1._age = 500; // Invalid age
// console.log(user1);


// Conditional property via protoype


// StaticMethods
// class user{
//     constructor(name, role){
//         this.name = name;
//         this.role = role;
//     }
//     static createAdmin(name){
//         return new user(name, 'Admin')
//     }
//     static createGuest(name){
//         return new user(name, 'Guest')
//     }
// }
// const person1 = user.createAdmin("Ashish");
// const person2 = user.createGuest("Saorabh");
// console.log(person1);
// console.log(person2);




// class bankAccount{
//     #balance; // private fields
//     constructor(name, initialBalance){
//         this.name = name;
//         this.#balance= initialBalance;
//     }
//     deposite(amt){
//         return this.#balance += amt;
//     }
//     getBalance(){
//         return this.#balance
//     }
// }
// const user1= new bankAccount("Ashish", 10000000);
// user1.deposite(10000);
// // user1.#balance = 0 // error
// console.log(user1);



//Public vs Private of encapsulation
// class DataComparison{
//     publicData= "i am public data";
//     #privateData = "I am private data";

//     publicMethod(){
//         console.log("Public Mehod called");
//         this.#privateMethod();
//     }
//     #privateMethod(){
//         console.log("private method called");
//         console.log(this.#privateData);
//     }
//     testAcess(){
//         console.log(this.publicData);
//         console.log(this.#privateData);
//         this.publicMethod();
//         this.#privateMethod()
//     }
// }

// const obj = new DataComparison();
// console.log(obj.#privateData) // error
// obj.publicMethod();
// obj.#privateMethod(); // error
// obj.testAcess();
// console.log(obj.publicData);


// DOM Manipulation with JS classes
// class Card{
//     constructor(title, content){
//         this.title = title;
//         this.content = content;
//         this.element = null;

//     }
//     render(parentID){
//         this.element = document.createElement("div");
//         this.element.className = "card";
//         this.element.innerHTML = `<h3>${this.title}</h3> <p>${this.content}</p>`;
//         const parent = document.getElementById(parentId);
//         parent.appendChild(this.element);
//     }
//     remove(){
//         this.element.remove();
//     }
// }
// const card1 = new Card("Title 1", "jhg hj  jhbuhjkl b ohlubhobn");
// const card2 = new Card("Title 2", "jihubgv ohuiyuvubh. uibgi. nbiuhniuy byuvb");
// card1.render("container");
// card2.render("container");
// card2.remove(); 

// Class Inheritance
// parent class
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} make a sound`);
//     }

// }
// // child class
// class Dog extends Animal{
//     constructor(){
//         super();
//         console.log("dog constructor")
//     }
//     bark(){
//         console.log(`${this.name} barks`)
//     }
// }
// const dog = new Dog("Buddy");
// // dog.bark();
// // dog.speak();




// Super keyword
// Propert Inheritance
// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class students extends person{
//     constructor(name , age , gender){
//         super(name , age)
//         this.gender = gender;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }
// const student1 = new students("Ashish", 20 , "male");
// console.log(student1);
// student1.study();


//Method Inheritance
// class Phone{
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }
//     call(){
//         console.log(`${this.brand} is calling`)
//     }
//     getPrice(){
//         return thhis.price;
//     }
// }
// class SmartPhone extends Phone{
//     constructor(brand){
//         super(brand);
//     }
//     takePhoto(){
//         console.log(`${this.brand} takes photo`);
//         console.log(`price of the phone is ${this.price}`); // cannot directly acces private property
//         console.log(`price of the phone is ${this.getPrice()}`)

//     }
// }
// const phone1 = new SmartPhone("samsung");
// phone1.takePhoto();
// phone1.call();


// Abstraction
// Getting method for private prop
// class CoffeeMachine{
//     #boilWater(){
//         console.log("water is boiling");
//     }
//     #brew(){
//         console.log("Brewing");
//     }
//     makeCoffee(){
//         this.#boilWater();
//         this.#brew();
//         console.log("Coffee is ready");
//     }
// }

// const machine = new CoffeeMachine();
// machine.makeCoffee();







// PolyMorphism - Method overriding
// class Animal{
//     makeSound(){
//         console.log("Some sound");
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("woof");
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("meow");
//     }
// }

// const dog = new Dog();
// dog.makeSound(); // Woof

// const cat = new Cat();
// cat.makeSound(); // meow







class Vehicle{
    start(){
        console.log(" engine is starting")
    }
}

class car extends Vehicle{
    start(){
        super.start();
        console.log("car is ready to run")
    }
}

const car = new car();
car.start();
