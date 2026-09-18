import isAdult from "./displayUI.js";
const name = document.getElementById("name");
const age = document.getElementById("age");
const dislay = document.getElementById("display");
const submit = document.getElementById("submit");


let users = [];


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    let obj = {
        name: name.value,
        age: age.value
    }
    let flag = isAdult(obj.age)
    if(!flag) return;

    users.push(obj);
    dislay.innerHTML = ""
    users.map((item) =>{
        let li = document.createElement("li");
        li.textContent = item.name;
        dislay.appendChild(li)
    })
})