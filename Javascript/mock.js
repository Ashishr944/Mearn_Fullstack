// // Q. Sum of consecutive pairs in array
// let arr= [1,2,3,4,5];

// for ( let i =0; i < arr.length-1; i++){
//     console.log(arr[i] + arr[i+1]);
// }
// Output:
// 3
// 5
// 7
// 9





// // Q. count number greater than 35

// let arr= [10, 40, 50, 20, 36];
// let count =0;

// for( let num of arr){
//     if( num > 35){
//         count++;
//     }
// }
// console.log(count);
// Output:
// 3






// Q. check if array is increasing

// let arr =[1,2,3,4,5];

// let increasing = true;

// for( let i =0; i <  arr.lenght-1; i++){
//     if( arr[i]>= arr[i+1]){
//         increasing =false;
//         break;
//     }
// }
// console.log(increasing);
// Output:
// true





// //Q. array sum, Average and maximun
// let arr= [ 10, 20, 30, 40];

// let sum = 0;
// let max= arr[0];

// for ( let num of arr){
//     sum += num;
//     if ( num > max){
//         max =num;
//     }


// }
// let average = sum/ arr.length;

// console.log("Sum:", sum)
// console.log("average", average);
// console.log("max", max);
// Output:
// Sum: 100
// Average: 25
// Maximum: 40







// // Q. even odd separate sorting

// let arr =[ 5,2, 8, 1, 9,4]
// let even = [];
// let odd = [];

// for ( let num of arr){
//     if ( num % 2 == 0){
//         even.push(num);
//     }
//     else{
//         odd.push(num);
//     }
// }

// even.sort((a,b)=> a-b);
// odd.sort((a,b)=> a-b);

// console.log("Even:", even);;
// console.log("Odd:", odd);
// // Output:
// // Even: [2, 4, 8]
// // Odd: [1, 5, 9]









// Q.  Valid triangle
// let a = 3; 
// let b =4;
// let c= 5;

// if( a+b > c && a+c> b&& b+c> a){
//     console.log("valid Triangle");
// }
// else{
//     console.log("invalid triangle");
// }

// // output:
// // Valid triangle







// // Q. Compare sum of two arrays
// let arr1 = [1,2,3];
// let arr2 = [3,5,6];

// let sum1 = arr1.reduce((a, b) => a +b, 0);
// let sum2 =arr2.reduce((a, b) => a + b, 0);

// if( sum1> sum2){
//     console.log("Array 1 is greater");
// }else if( sum2 > sum1){
//     console.log("Array 2 is greater");
// }else{
//     console.log("both are equal");
// }

// // output:
// // Array 2 is greater










// //Q Find product of all elements in array

// let arr = [1, 2, 3, 4];

// let product= 1;

// for (let num of arr){
//     product*=num;
// }
// console.log(product);
// // output: 24








// // Q Index of element in array
// let arr = [10,20,30, 45];
// let target = 30
// console.log(arr.indexOf(target));
// // output : 2






// // Q angry professor problem
// let arrivalTimes = [-1, -2, 4, 2];
// let k = 2;
// let onTime =0;
// for( let time of arrivalTimes){
//     if (time <=0){
//         onTime++;
//     }
// }

// if(onTime >= k){
//     console.log("No");
// }
// else{
//     console.log("yes");
// }

// // ouput= No






// // Q Replace Element in array
// let arr= [1,2,3,4,5];

// arr[2] =10;
// console.log(arr);
// // output: [ 1, 2, 10, 4, 5 ]




// // Q. Count positive negative and zero numbers
// let arr = [-3,-5-3, 0 , 3, 1];
// let positive = 0;
// let negative = 0;
// let zero = 0;


// for( let num of arr){
//     if (num> 0){
//         positive++;
//     }
//     else if( num< 0){
//         negative++;
//     }
//     else{
//         zero++
//     }
// }

// console.log("Positive", positive);
// console.log("Negative", negative);
// console.log("Zero", zero);
// // ouput: 
// // Positive 2
// // Negative 2
// // Zero 1





// // Q. Sum of array
// let arr = [ 3 , 4, 5, 6, 7];
// let sum = 0;
// for (let num of arr){
//     sum += num;
// }

// console.log(sum);

// // output = 25




// // Q. Longest String in array 
// let arr = [ "apple", "banana", "grapes", "watermelon"];

// let longest = arr [0];

// for( let str of arr){
//     if (str.length > longest.length){
//         longest = str;
//     }
// }

// console.log(longest);
// // ouput : watermelon





// // Q. Print elements at even index
// let arr =[ 10, 30, 40, 50, 20];
// for( let i = 0; i < arr.length; i +=2){
//     console.log(arr[i]);
// }
// // ouput:
// // 10
// // 40
// // 20






// // Q Find last occurance index
// let arr = [ 1, 2, 3, 2, 4];
// let target = 2;

// console.log(arr.lastIndexOf(target));
// // output: 3





// // Sum of odd numbers
// let arr = [ 1,2,3,4,5,6,7,8,9];

// let sum = 0;
// for ( let num of arr){
//     if ( num %2 !==0){
//         sum+= num;
//     }
// }
// console.log(sum);
// // ouput: 25






// // Q. Calsulate average grade 
// let arr = [ 50, 38, 56, 87, 90]

// let sum = 0;
// for ( let num of arr){
//     sum+= num;
// }
// let average = sum/ arr.length;

// console.log("Average grade", average);
// // ouput; Average grade 64.2





// // Q. Find Number of days in month

// let month = "February";

// switch ( month){
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//         console.log(31);
//         break;
    
//     case "February":
//         console.log(28);
//         break;

//     default:
//         console.log("Invalid Month");

// }

// // ouput: 28







// // Q. Second Largest element in array
// let arr = [ 10,30,40,50,70];

// let largest = -Infinity;
// let seconfLargest = - Infinity;

// for( let num of arr){
//     if ( num > largest){
//         secondLargest = largest;
//         largest = num;
//     }
//     else if ( num > secondlargest && num !== largest){
//         secondLargest = num;
//     }
// }

// console.log("Second Largest", secondLargest);
// // output: Second Largest 50








// // Q. Find dominant element index
// // Dominant elemet >= 2 * every other element

// let arr = [ 3,6,1,0];
// let max = Math.max(...arr);
// let index = arr.indexOf(max);

// let dominant = true;
// for (let num of arr ){
//     if ( num !== max && max <2 * num){
//         dominant =false;
//         break;
//     }

// }
// console.log(dominant ? index : -1);
// // ouput: +1






// // Q. Print prime number in range 

// let start = 1;
// let end =20;

// for ( let num = start; num <=end; num++){
//     if ( num <2)continue;

//     let isPrime= true;

//     for(let i = 2; i <= Math.sqrt(num); i++)
//     {
//         if (num % i ===0){
//             isPrime = false;
//             break
//         }
//     }
//     if(isPrime){
//         console.log(num);
//     }
// }
// // ouput;
// // 2
// // 3
// // 5
// // 7
// // 11
// // 13
// // 17
// // 19







// // Q. Find max Number in array
// let arr = [ 12, 45, 67, 23, 45,49];
// let max = arr[0];

// for ( let num of arr){
//     if ( num > max){
//         max = num;
//     }
// }
// console.log("maximum", max);
// output: 67







// //Q . Function with dynamic input

// function add( a, b){
//     return a +b;
// }

// let num1= 10;
// let num2= 20;

// console.log(add(num1, num2));
// // ouput: 30







// // Q. Generate combination of 2 elements
// let arr = [ 1,2,3,4];
// for( let i =0; i< arr.length; i++){
//     for (let j = i+1; j <arr.length; j++){
//         console.log(arr[i], arr[j]);
//     }
// }

// // ouput:
// // 1 2
// // 1 3
// // 1 4
// // 2 3
// // 2 4
// // 3 4







// // Q. Shuffle string characters
// let str = "hello";

// let shuffled = str
// .split('')
// .sort(()=> Math.random()- 0.5)
// .join('');

// console.log(shuffled);
// // ouput: lleoh










// // Q. arrange element in ascending order
// let arr = [ 5, 2, 8, 1, 4];
// arr.sort((a, b) => a- b);

// console.log(arr);
// // ouput : [ 1, 2, 4, 5, 8 ]






// // Q. Check multiplication of a number 

// let num = 20;
// let divisor= 5;

// if ( num % divisor === 0){
//     console.log("Multiple");
// }
// else{
//     console.log("Not Multiples");
// }

// // ouput: Multiple






// // Q Minimum distance between even numbers

// let arr = [ 1,3 ,4, 5, 6,7,2]

// let prev = -1;
// let minDistance = Infinity;

// for ( let i = 0; i< arr.length; i++){
//     if (arr[i] % 2=== 0){
//         {
//             if(prev!== -1){}
//         minDistance = Math.min(minDistance, i- prev);
//     }

//     prev = i
// }
// }
// console.log(minDistance);

// // ouput: 2








// // Q.Find  Subarray of array

// let arr = [ 1, 2, 3];

// for( let i = 0; i < arr.length; i++){
//     let subarray =[];

//     for (let j = i; j< arr.length; j++){
//         subarray.push(arr[j]);

//     console.log(subarray);
// }
// }

// // ouput: 
// // [ 1 ]
// // [ 1, 2 ]
// // [ 1, 2, 3 ]
// // [ 2 ]
// // [ 2, 3 ]
// // [ 3 ]





// // Q. Check last digit is even

// let num = 248;

// let lastDigit = num % 10;
// if( lastDigit %2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// // ouput: even 





// // Q. Print continues charcter pattern

// let row = 5;
// let ch = 65;

// for (let i =1; i<= row; i++){
//     let pattern ="";
//     for (let j= 1; j <=i; j++){
//         pattern += String.fromCharCode(ch) + " ";
//         ch++;
//     }
//     console.log(pattern);
// }

// // ouput:
// // A 
// // B C 
// // D E F 
// // G H I J 
// // K L M N O 





// // Q. Alphabet triangle pattern

// let row =5;
// for( let i= 1; i<= row; i++){
//     let pattern ="";

//     for(let j =0; j <i; j++){
//         pattern += String.fromCharCode(65 + j) + " ";
//     }
//     console.log(pattern);
// }
// // ouput: 
// // A 
// // A B 
// // A B C 
// // A B C D 
// // A B C D E 






// // Q. remove Duplicate from string
// let str ="programming";

// let result = "";

// for( let char of str){
//     if ( !result.includes(char)){
//         result +=char;
//     }
// }

// console.log(result);

// // ouput: programin









// // Check palindrome string
// let str = "madam";

// let reverse = str.split(' ').reverse().join(' ');

// if ( str === reverse){
//     console.log("Pallindrome");
// }
// else{
//     console.log("Not pallindrome");
// }

// // ouput: pallindrome







// // Q. character case check

// let ch = "A";

// if (ch >= 'A' && ch <= 'Z'){
//     console.log("Uppercase");
// }else if( ch >= 'a' && ch <='z'){
//     console.log("Lowercase");
// }else{
//     console.log("not an alphabet");
// }

// // ouput: Uppercase








// // Q. Reverse a string
// let str = "Apple";

// let reversed = str.split('').reverse().join('');

// console.log(reversed);

// // ouput: elppA




// //Q . Word reverse
// let str = "Hello World";

// let result = str
// .split(' ')
// .map(word => word.split('').reverse().join(''))
// .join(' ');

// console.log(result);

// // ouput: olleH dlroW







// //Q. student records with total marks
// let students = [
//     { name: "Ashish", marks: 56},
//     { name: "Rahul", marks: 45},
//     { name: "arr", marks:87}

// ];

// let total = 0;
// for ( let student of students){
//     total +=student.marks;
// }

// console.log("Total marks:", total);

// // output: 188







// // Q. Display Student records
// let students = [
//     { name: "Ashish", age: 32, grade: "A"},
//     {name: "apple", age: 34, grade:"B"},
//     { name: "rahul", age: 23, grade:"A"}
// ];

// for ( let student of students){
//     console.log(student.name, student.age, student.grade);
// }

// // ouput: 
// // Ashish 32 A
// // apple 34 B
// // rahul 23 A









// // Q. Find nested object values using path

// let obj= {
//     user:{
//         profile:{
//             name:"Ashish"
//         }
//     }
// };

// let path = "user.profile.name";

// let keys = path.split('.');
// let result = obj;

// for( let key of keys){
//     result = result[key];
// }
// console.log(result);

// // ouput: Ashish




// //Q. Calculate total book price
// let books =[
//     { name: "Book A", Price: 890},
//     { name: "Book B", Price: 987},
//     { name: "Book C", Price: 876}

// ];

// let total = 0;
// for( let book of books){
//     total+= book.Price;
// }
// console.log("Total Price of book is", total);

// // ouput: Total Price of book is 2753 







// // Q. check if JSON Propery exists in object

// let obj={ name: "Ashish", age: 21};
// let property = "age";

// if( obj.hasOwnProperty(property)){
//     console.log("Property Exists");
// }else{
//     console.log("Property Not Found");
// }

// // output: Property Exist










// // Q Unreaded Books Tracker
// let books = [
//     { title: "Atomic Habits", read: true},
//     { title: "Clean Code", read: false},
//     { title: "silly things", read: false}
// ];

// for( let book of books){
//     if(!book.read){
//         console.log("Books which are not read yet:", book.title);
//     }
// }

// // Output:
// // Books which are not read yet: Clean Code
// // Books which are not read yet: silly things






// // Filter band memory by age

// let band =[
//     { name: "A", age: 23},
//     { name: "B", age: 12},
//     { name: "C", age: 34}
// ];

// let filtered = band.filter(member => member.age >= 21);

// console.log(filtered);

// // output: [ { name: 'A', age: 23 }, { name: 'C', age: 34 } ]






// // Q. Delete JSON Object property
// let user ={
//     name: "Ashish", age: 21, city: "Pune"
// };

// delete user.city;
// console.log(user);

// //ouput: { name: 'Ashish', age: 21 }






// // Q. get object key

// let person ={
//     name: "Ashish", age: 21, city :" Pune"
// };

// let keys = Object.keys(person)

// console.log(keys);

// // output: [ 'name', 'age', 'city' ]





