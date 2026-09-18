// let obj = {
//     name: "pranav",
//     age : 20,
//     gender: "Male",
//     skills: ["html", 'css'],
//     course: "MERN"
// }

let submit = document.querySelector("#submit");
let students = []
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let gender = document.querySelectorAll('input[name = "gender"]:checked');
    let skillCheckbox = document.querySelectorAll('input[name = "skills"]:checked')
    let skills = []
    skillCheckbox.forEach(item=>{
        skills.push(item.value)
    })
    // console.log(skillCheckbox);

    let courseElement = document.querySelector("#course");
    let course = courseElement.options[courseElement.options.selectedIndex].value

    let obj = {};
    obj.name = name.value;
    obj.age = age.value;
    obj.gender = gender.value;
    obj.skills = skills;
    obj.course = course;
    console.log(obj);

    students.push(obj);
})



