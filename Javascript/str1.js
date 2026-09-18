//1. string reverse
let str = "Hello";
let reverse = "";
for( let i = str.length-1; i>=0; i--){
    reverse += str[i]
}
console.log(reverse) // olleH

//2. String searching
let str1= "Hello Ashish";
console.log(str1.indexOf("Ashish")); // 6
console.log(str1.indexOf("Apple")); // -1

//3. Check substing existance
if(str1.indexOf("Hello") !== -1){
    console.log("Found")
}
else{
    console.log("Not Found");
}
// found

//4. Indexof
console.log(str1.lastIndexOf("s")); // 10
console.log(str1.indexOf("s")); // 7

//5. indclude()
console.log(str1.includes("Ashish")) // true

//6.startwith
console.log(str1.startsWith("H")) // True

//7. endsWith
console.log(str1.endsWith("h")); //true


// 8.first occurance
let str2 = "banana";
let count =0;
for( let ch of str2){
    if( ch === "a"){
        count++
    }
}
console.log(count); // 3

// 9. print character one by one
for (let ch of str2){
    console.log(ch);
}

// program for word count in string
let sentence = "Hello world, welcome to JavaScript";
let words = sentence.split(" ");
console.log(words.length); // 5 
