const students = [
  { name: "Amit", math: 78, science: 82, english: 90 },
  { name: "Sneha", math: 88, science: 75, english: 86 },
  { name: "Ravi", math: 92, science: 90, english: 85 }
];
for ( let student of students){
    let total = student.math + student.science + student.english;
    let average = total / students.length
    console.log(student.name + "Total : " + total.toFixed(2) + " Average :" + average)
}



// Object 2
const people = [
  { name: "Meena", age: 25 },
  { name: "Rahul", age: 19 },
  { name: "Simran", age: 30 },
  { name: "Arjun", age: 22 }
];

let oldest = people[0];
let youngest = people[0];

for( let i =1; i < people.length; i++){
    if (people[i].age > oldest.age){
        oldest= people[i];
    }

    if( people[i].age < youngest.age){
        youngest= people[i]
    }
}

console.log("Oldest: "+ oldest.name + "("+ oldest.age + ")");
console.log("Youngest: "+ youngest.name+ "(" + youngest.age+")")



// obj 3
const employees = [
  { name:"A", salary:50, experience:3 },
  { name:"B", salary:60, experience:2 },
  { name:"C", salary:55, experience:4 },
  { name:"D", salary:70, experience:5 }
];

// for( let i =0; i< employees.length; i++){
//     for( let j =0; j<employees.length; j++){
//         if (employees[j].experience < employees[j+1]){
//             let temp = employees[j];
//             employees[j] = employees[j+1];
//             employees[j+1]= temp;

//         }
//     }
// }
employees.sort((a, b)=> b.experience -a.experience);

console.log(employees)

// string
const str = "how are you";

const output = str
  .split(" ")
  .reverse()
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(output);


let n = 8;
for ( let i =2; i <=n; i++){
    let isPrime = true;

    for ( j =2; j <= Math.sqrt(i); j++){
        if (i % j === 0){
            isPrime = false;
            break
        }
    }

    if( isPrime){
        console.log(i)
    }
}