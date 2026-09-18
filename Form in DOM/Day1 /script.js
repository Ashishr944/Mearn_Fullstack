const form = document.forms.myForm;
// // const form= document.getElementById("my-form");
// console.log(form);


// // targetting my form element
// // targeting input using form elements (ideal)
// // const addressInout = form.elements.address;

// const address = form.elements.address;
// const name = form.elements.name;
// console.log(address.value);
const name = form.elements.name;
const address = form.elements.address;
const age = form.elements.age;
const userInfo = form.elements.userInfo;
let tbody = document.querySelector("tbody")

let people = [];
const sumbitBtn = document.getElementById('submitBtn');
sumbitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const personObj = {};


    if(name.value.trim()){
        return
    }
    else{
        personObj.name = name.value;
    }

    // task 2
    // do form validation for address age and userInfo
    // users below the age of 18 should not be allowed in the table

    personObj.name = name.value;
    personObj.address = address.value;
    personObj.age = age.value;
    personObj.userInfo = userInfo.value;
    // console.log(address.value)
    // console.log(name.value)
    // console.log(age.value)
    // console.log(userInfo.value)
    console.log(personObj);
    people.push(personObj);
    tbody.innerHTML= "";
    createTable(people);
    // reset all the values in form
    form.reset();


})

function createTable(people) {
    people.map((item) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = item.name;
    let td2 = document.createElement("td");
    td2.textContent = item.address;
    let td3 = document.createElement("td");
    td3.textContent = item.age;
    let td4 = document.createElement("td");
    td4.textContent = item.userInfo;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tbody.append(tr);

  })
}

// every time i enter values in the form anf click on submit 
// it should enter the details inside my table
// name adress age userInfo
// make the below table dynamic
// name      adress      age     info
// Ashish    pune       12      dsfj
// Apple      goa        23      jihub
// Anjali     delhi     23      nhgh


// let people = [{
//     name: "pranav",
//     address : "pune",
//     age : 34,
//     userInfo: "jhgbhnjj"
// },
// {
//     name: "pranav",
//     address : "pune",
//     age : 34,
//     userInfo: "jhgbhnjj"
// },
// {
//     name: "pranav",
//     address : "pune",
//     age : 34,
//     userInfo: "jhgbhnjj"
// },
// {
//     name: "pranav",
//     address : "pune",
//     age : 34,
//     userInfo: "jhgbhnjj"
// }];

