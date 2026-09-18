// let students = { name : "AShish",
//      age: 23,
//       address:{ 
//         city: "PUne", 
//         state: "maharashtra"
//     }
// }

// let student2= {...students }
// // console.log(student2);

// student2.name= "aditya";

// // console.log(students);
// // console.log(student2);

// student2.address.city = "sambhajinagar";
// console.log(students);
// console.log(student2);


// let student3= structuredClone(students);
// // console.log(student3);

// student3.name = "Manish";
// // console.log(students);
// // console.log(student3)


// student3.address.city= "Buldhana";
// console.log(students);
// console.log(student3);



// for(let i = 0; i<= 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }


for(let i = 0; i<= 10; i++){
    if(i === 5){
        continue;
    }
    if(i === 8){
        break;
    }
    console.log(i);
}