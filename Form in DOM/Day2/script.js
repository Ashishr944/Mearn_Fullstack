// console.log(document.querySelector('#elem'));
// console.log(document.getElementById('elem'));
// console.log(document.getElementById('elem')[2]);



// let element = document.getElementById('element');
// element.style.color = 'blue';
// element.style.backgroundColor = 'aqua';

// Point
// closest -> searches for its parent, grandparent, ancestors
// let chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book')); // book element
// console.log(chapter.closest('div')); // book element
// console.log(chapter.closest('.contents')); // book element
// console.log(chapter.closest('h1')); // null because it is not a ancestor

// manipulating elements
// console.log(document.querySelector(".contents").id);
// console.log(document.querySelector(".contents").className);
// let contensts = document.querySelector(".contents");
// contensts.id = 'newId';
// console.log(document.querySelector(".contents").id);
// contensts.className = 'wraper newClass';
// console.log(document.querySelector(".wraper").className);


// let img = document.querySelector('img');
// img.src = "https://unsplash.com/photos/rooster-and-chickens-free-range-and-hens-UNDjDRBS5x4";
// img.alt = "Dog image";


// // classlist -> gives a list of class and multiple methods that can be attached
// // methods that can be attached to this list
// console.log(document.querySelector(".contents").classList);
// let contents = document.querySelector(".contents").classList;
// contents.add('newClass');          // add className
// contents.remove('newClass');      // removing className
// contents.toggle('con');        // toggle classNane
// console.log(contents.contains('container')); // check if the className exist
// console.log(document.querySelector(".contens").classList);



// getAttribut, setAttribute 
// let img =  document.querySelector('img');
// console.log(img);
// img.getAttribute('src');
// console.log(img.getAttribute('src'));
// img.setAttribute('src', 'https://unsplash.com/photos/rooster-and-chickens-free-range-and-hens-UNDjDRBS5x4');
// img.setAttribute('alt', 'Dog img');

// let boxContainer = document.querySelector('.box-container');
// let div = document.createElement('div');
// div.style.height = "200px";
// div.style.width = "200px";
// div.style.backgroundColor = "red";
// div.clasName = "box";

// boxContainer.appendChild(div);
// // boxContainer.appendChild(div);

// let p = document.createElement('p');
// p.textContent = 'asdsfdsadsf';
// boxContainer.appendChild(p);

// let fruit = ['appele', 'banana', 'kivi', 'orange'];
// let ul = document.querySelector('ul');
// fruit.map((item)=> {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });


let users = [
    {id : 1, name : "Ashish"},
    {id : 2, name : "Saurabh"},
    {id : 3, name : "Pranav"},
    {id : 4, name : "Yash"}
]

// make the below table using JS and the  data given above
// id     name
// 1      Ashish
// 2      Saurabh
// 3      Pranav
// 4      Yash



// let table = document.querySelector('table');


// users.map(item =>{
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     td1.textContent = item.id;
//     let td2 = document.createElement('td');
//     td2.textContent = item.name;

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     table.appendChild(tr);
// })

let ul = document.querySelector("ul");

let select = document.querySelector("#select");
let li = document.createElement("li")
let p = document.createElement("p");
p.textContent = "Ashish"
li.textContent = "Banana";
ul.appendChild(li); // add at the end
// ul.prepend(li); // adds at the start
// ul.after(p) // after sibling element
ul.before(p)// before the sibling element

// Deletion of an element in DOM
ul.remove();