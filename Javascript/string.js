let str = "JavaScript";
console.log(str);
let single = 'Apple';
let double = "Apple";
let backticks = `Apple`; 

// escaping characters:
console.log("hello\nworld");

// Template Literals + Interpolation
let user = "Ashish";
console.log(`hello ${user}`); // ouput: hello Ashish

//1. length property in string
// print the length of string
console.log(str.length); // ouput : 10
console.log(user.length); // ouput : 6

//2. accesing character at specific index
console.log(str[2]); // ouput : v
console.log(str[4]); // ouput : s

//3. immutability: string  cannot be modified after it created
let immutable = "hello";
immutable[0] = "H";
console.log(immutable);
// Output: hello

//4. String Concatination
//Adding multiple sting
console.log( str+ " " + user); // ouput : JavaScript Ashish

// 5. string Iteration
for ( let ch of str){
    console.log(ch);
}
// ouput:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


// string searching and manipulation
let txt = "JavaScript Language";
//A. indexOf()
console.log(txt.indexOf("L")); // 11
//B. includes()
console.log(txt.includes("L")); // true
//C. slice(): print elements in range
console.log(txt.slice(0,13)); // ouput: JavaScript La
//D. substring(): extracts a portion of a string between two specified indices and returns it as a new string
console.log(txt.substring(1,13)); // ouput: avaScript La
//E. toUpperCase(): Convert element of array in uppercase
console.log(txt.toUpperCase()); // ouput : JAVASCRIPT LANGUAGE
//F. toLowerCase: Convert all elements to lower case
console.log(txt.toLowerCase()); // ouput: javascript language
//E. replace(): replace first occarance
console.log(txt.replace("Java", "Type")) // TypeSctipt Language;
//F. replaceAll(): replace all occurance
console.log(txt.replaceAll("a", "c")) // JcvcScript Lcngucge
//G. split(): Convert string to array
let word= txt.split(" ");
console.log(word); // [ 'JavaScript', 'Language' ]
//F. join(): conver array into string
console.log(word.join(" ")) //JavaScript Language



// String utilities
let utility = "   Hello JS   ";
//h. trim(): remove space from both side
console.log(utility.trim()); // Hello JS
//i. trimStart(): remove space from starting
console.log(utility.trimStart()); //Hello JS   
//j. trimEnd(): remove space from ending
console.log(utility.trimEnd()); //   Hello JS
//k. padStart(): adds characters to the beginning of a string until it reaches a specific target length
console.log("5".padStart(2, "0")) //05
//l. padEnd(): add characters to the end of string
console.log("5".padEnd(3,"0")) //500




// ASCII using 
//1. charCodeAt(): used to find the UTF-16 code unit of a character at a specific position in a string
console.log("A".charCodeAt(0)); // 65
//.fromCharCode(): a static method in JavaScript used to create a string from a sequence of UTF-16 code units (numeric Unicode values)
console.log(String.fromCharCode(66)); // B







