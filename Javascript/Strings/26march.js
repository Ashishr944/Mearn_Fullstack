// // finding ASCII values
// let char = "A";
// // char to ascii value
// console.log(char.charCodeAt(0)); // 65

// let asciCode = 65;
// // value to asciCode
// console.log(String.fromCharCode(asciCode));




//////////////////////////// replace method /////////////

// let message = " javascript is fun. javascript is powerfull";
// // this will replace first javascript to js
// console.log(message.replace("javascript", "JS")); //JS is fun. javascript is powerfull

// // this will replace all javascript to js
// console.log(message.replaceAll("javascript", "JS")); // JS is fun. JS is powerfull


//////////// split and joints //////////
//1.split
//split convert string to array
//string and input -> array as output
// convert given input into normal sentence
// let input = "hi.I.am.ashish.,.nice to meet you";

// console.log(input.replaceAll(".", " ")); 

////////////split and joints////////////
// let input = "hi.I.am.ashish.,.nice to meet you";
// console.log(input.split("."));

// split
// 1. string as input -> array as output
// 2. splits the string accorging to the given charecter
// let input = "hi.I.am.sourav,.nice.to.meet.you"
// console.log(input.split("."));
// console.log(input.split("")); //this will you give you all the charecters in your string


// let input2 = "hi I am sourav nice to meet you"
// let result = input2.split(' ')  //this will give you all the words in the sentence

// join method
// 1. array -> string
// joins the array of string according to the given parameter
// console.log(result.join("-"))   //hi-I-am-sourav-nice-to-meet-you
// console.log(result.join(" "))   //hi I am sourav nice to meet you

//task create a acronym generator
// eg input -> national aeronautics space administration
// output -> NASA
// let str = "national aeronautics space administration"
// function acronym(string){
//     let words = string.split(" ");
//     let result = ""
//     for(let i=0;i<words.length;i++){
//         let word = words[i];
//         let capitalLetter = word[0].toUpperCase();
//         result = result + capitalLetter
//     }
//     return result
// }
// console.log(acronym(str));

//////////////////////////  trim() ////////////////////

// removes spaces from the start and end of the string
// let name = "   sourav    ";

// console.log(name)
// // removes spaces fromt both ends
// console.log(name.trim()); //sourav

// // removes space from start
// console.log(name.trimStart()) //sourav   

// // removes space from end
// console.log(name.trimEnd()) //   sourav


//////////////////////////  padding  ///////////////////////////////
// used for masking values

// syntax -> str.padStart(length of the string, char you want to mask)
// this will mask at the begining of the str
// let code = "56";
// console.log(code.padStart(10, "*"));    //********56

// let code2 = "46"
// console.log(code2.padEnd(8,"0"));   //46000000

/////////////////////////////////////////////////////////////////////////

//task1: return the reverse of a string
// intput -> "hello"
// output -> "olleh"

// let str = "hello";
// function reverse(string){
//     // method 1
//     // console.log(string.split('').reverse().join(""))

//     // method
//     let result = ""
//     for(let i=string.length-1; i>=0; i--){
//         result = result + string[i]
//     }
    
//     return result
    
// }
// console.log(reverse(str));


// task2: for a given string count the number of vowels 
// input -> asdesdisd
// output -> 3

// let str = "asdesdisd";
// function countVowel(string){
//     let count = 0;
//     for(let i=0; i<string.length; i++){
//         let letter = string[i];
//         if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowel(str))




// task3: for a given string check if it is a palindrome
// input -> malayalam
// output -> true

// let str = "malayalam"
// function checkPali(string){
//     let reverse = string.split('').reverse().join("")
//     if(string == reverse){
//         return "is palindrome"
//     }else{
//         return "is not palindrome"
//     }
// }
// console.log(checkPali(str))


// task4 convert the sentence into camel case
// input: "hello world"
// output: "Hello World"

// input: "asd ASDASD wqeqweq"
// output: "Asd Asdasd Wqeqweq"   