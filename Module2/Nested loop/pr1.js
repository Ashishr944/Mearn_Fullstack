// function sumEven(arr, sum =0){
//     if( arr.length === sum){
//         return 0;
//     }
//     if(arr[sum ] % 2 ==0){
//         return arr[sum] + sumEven(arr, sum +1);
//     }
//     return sumEven(arr, sum +1);

// }
// let arr1= [ 1,2,3,4,5,6];
// console.log("Sum of even " + sumEven(arr1));


const students = [
  { name: "Rahul", marks: 80 },
  { name: "Priya", marks: 90 },
  { name: "Aman", marks: 70 },
  { name: "Neha", marks: 60 }
];

// Step 1: filter students (example: marks >= 70)
const filteredStudents = students.filter(student => student.marks >= 70);

// Step 2: get marks only
const marksArray = filteredStudents.map(student => student.marks);

// Step 3: find total marks
const total = marksArray.reduce((sum, mark) => sum + mark, 0);

// Step 4: average
const average = total / marksArray.length;

console.log("Average Marks =", average);


// array transpose:
let arr = [
  [1, 2, 3],
  [4, 5, 6]
];

let transpose = [];

for (let i = 0; i < arr[0].length; i++) {
    transpose[i] = [];

    for (let j = 0; j < arr.length; j++) {
        transpose[i][j] = arr[j][i];
    }
}

console.log(transpose);