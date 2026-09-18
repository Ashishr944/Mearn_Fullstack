// // console.log("Ashish")

// // local storage

// // -> Storing values in local storage
// // syntax
// // localStorage.setItem(<key>,<value>)
// // localStorage.setItem('name', 'Ashish');

// // Using Local storage SetItem/getItem
// // fetching values in local storage
// let value = localStorage.getItem('name');
// console.log(value); //

// localStorage.setItem('name1', 'Saurabh');
// localStorage.setItem('name2', 'Rokade');

// let value2 = localStorage.getItem('name2');
// console.log(value2); // Rokade 


// // Reset values in localstorage
// localStorage.setItem("name2", "");

// //Managing local storage
// // Removing a specific key values pair from localSorage
// localStorage.removeItem("name2");
// localStorage.setItem("name2", "asdfg");
// localStorage.setItem("name3", "fagddf");

// console.log(localStorage.length); // 2

// // Removing all your key values pairs from localStorage
// localStorage.clear();



// Security and scope of Local Storage
// LocalStorage -> its a browser storage given to a website that allows persistant key value pairs with no expiration time
// -> Data survies when browser restarts and is accessible accross all  tabs/windows of the "smae origin"


// // How to check the local storage in Local Storage
// if(navigator.storage && navigaton.storage.estimate){
//     navigator.storage.estimate().then(est => {
//         console.log(`Used: ${est.usage} of ${est.quota} bytes`);
//     })
// }



// wrong method
// localStorage.setItem("Number", 4);
// localStorage.setItem("array", [1,2,3,4,5]);
// localStorage.setItem("object",{name: "Ashish"});


// right method to set item
// JSON method to store Item
// localStorage.setItem("array", JSON.stringify([1,2,3,4]));
// localStorage.setItem("object", JSON.stringify([{name:"Ashish"}]));
// localStorage.setItem("object", JSON.stringify(4));


// console.log(JSON.parse(localStorage.getItem("number")));
// console.log(JSON.parse(localStorage.getItem("array")));
// console.log(JSON.parse(localStorage.getItem("object")));



// // DOM content loded execution script
// // The below script only run when the document has been loaded

// document.addEventListener("DOMContentLoaded", ()=> {
//     console.log(JSON.parse(localStorage.getItem("number")));
//     console.log(JSON.parse(localStorage.getItem("array")));
//     console.log(JSON.parse(localStorage.getItem("object"))); 
// })



// Parsistant counter with local storage
// Counter code 

// let countDisplay = document.getElementById("counterDisplay");
// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");

// let count = JSON.parse(localStorage.getItem("count")) || 0;
// countDisplay.textContent = count;
// increase.addEventListener('click', () =>{
//     count++;
//     countDisplay.textContent = count;
//     localStorage.setItem("count", JSON.stringify(count));
// })
// decrease.addEventListener('click', ()=>{
//     count--;
//     countDisplay.textContent = count;
//     localStorage.setItem("count", JSON.stringify(count));

// })



// Session Storage overview
// sessionStorage.setItem("name","ashish");

