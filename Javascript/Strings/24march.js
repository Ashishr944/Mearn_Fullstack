//strings
// it represents sny textual data
//eg
// let str = "helllo"
// or 
// let str = 'hello'
// or 
// let world = " world"
// let str =`hello $ { world}`

// let world = "world";
// let str = `hello ${world}`;
// // console.log(str);

// If you want to display the string in particular format using backticks using "" or '' will not worl here
// let fruits = `fruits:
//     *apple
//     *banana
//     *kiwi
// `
// console.log(fruits);

///////////////Spacial Characters
// \n denotes line break
// let fruits = " fruits : \n *apple \n *banana \n kiwi";
// console.log(fruits);

// let str1 = "hello\world"; // both are same
// let str2 = `hello
// world`;
// console.log(str1);
// console.log(str2);


// if ( str1 == str2 ) console.log("They are same");



// this is how you print backslash
//console.log("backslash:  \\");

//////////////////////////quates ////////////
// console.log("Hi i'm Ashish");
// //when you want to use ' or " inside '' or ""
// console.log("Hi i\'m Ashish");
// console.log('Hi i\'m ashish');


///////////////tab //////////
// this is how you print tabs( multiple space)
//console.log("hi \t I'm \t pranav");




////*** Spacial Charactes
// 1) \n - newline
// 2) \\ - backslash
// 3) \', \'', \` - quotes
// 4) \t - tabs


// notes: a;; special charates starts witg \. its also called "escape charecters"



/////////////////////////////////////////////////////////////////////////////////////////

// let str = " hello";
// let arr = [ 'h', 'e', 'l', 'l', 'o'];
// console.log(str[0]); // h
// console.log(str[str.length -1 ]);

// Note:  do not use .lenght() as length is not a method its property

// console.log(str.at9(0)); //h
// console.log(str.at(-1));
// note: you cannot use -ve index in str[] but you can use it in str.at()

///iterating through the string
// let str = " hello";
// for( let i =0; i < str.length; i++){
//     console.log(str[i]);
// }
// for( let char of str){
//     console.log(char);
// }


/////// Strings are not mutable ///////
// let str = "hello";
// let arr =[ 'h', 'e', 'l', 'l', 'o'];

// arr [0] = 'h';
// str [0] = 'h';
// console.log(str); // hello


///////////////upercase ///////////////

// let str = "hello";
// console.log(str.toUpperCase()); // .toUpperCase() converts the string into uppercase

// console.log(str.slice(1));

// console.log(str[0].toUpperCase() + str.slice(1)); // Hello

// let STR = "HELLO";
// console.log(STR.toLowerCase()); // .toLowerCase() converts the string into lowercase


// task: you are given a string convert it into camel case implement the function to do input1 =hello -> , input2 = jAVAsCript -> Jascript, input3 = the -> The

//let string1 = 'hello';
//let string2 = 'jAVAsCript';
//let string3 = 'The';
// camelCase(string)
// function camelCase(str){
//    console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

//     //or 
//     str = str.toLowerCase()
//     console.log(str[0].toUpperCase() + str.slice(1));

// }



///////////////////////// Index of ///////////
// sytax str.indexOf(substring, index(optional))
// let str = " hello";
// // console.log(str.indexOf('h')); // 0

// // this give the strating index of the word
// let str2 = "Widget with id";
// console.log(str2.indexOf('Widget')); // 0
// console.log(str2.indexOf('with')); // 7
// console.log(str2.indexOf('id')); // 1

//////////////// includes///////
// to search a substring inside a string
// sytax str.include(substing, index(optional));

// let str2 = "Widget with id";
// console.log(str2.includes('Widget')); // true
// console.log(str2.includes('widget')); // false

//////////////startswith abd endwith//////
// let str2 = "widget with id";
// console.log(str2.startsWith("wid")); // true
// console.log(str2.endsWith("id")); //true


////////////// substrings //////////////
//1. method
//let str = 'stringify';
// console.log(str.slice(0,5)); //strin
// console.log(str.slice(5)); // gify
// console.log(str.slice(-4, -1)); // gif


//2. substring
// console.log(str.substring(0,5)); //strin

// in substing if the 1st index is greater than the 2nd index it will interchange them to given the right answer
// substring does not support -ve index
// console.log(str.substring(6,2)); //ring
// console.log(str.substring(-4, -1)); //ring


//3. substr
// syntax -> str.substr(index, substring length)
// let str = 'stringify';
// console.log(str.substr(2,5)); //ringi
// console.log(str.substr(2,4)); // ring
// console.log(str.substr(-4,2)); // gi