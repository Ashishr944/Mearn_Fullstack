// // click
// // hover
// // mouseover/ mouseout -> cursor enters or leaves an element
// // mousedown/ mouseup -> mousse button is pressed and released
// // keyup / keydowm -> keyboard key is pressed and released
// // submit -> when user sumbit form
// // focus ->  when user focuses on an element


// // alert("Hello word");

// // let btn = document.querySelector(".click-btn");
// // btn.addEventListener('click', greet); // this is the right way

// // here the function is called before the click is registered
// // btn.addEventListner('click', greet());

// // function greet(){
// //     alert("hello world");
// // }


// // btn.addEventListener('click', () => {
// //     alert("hello world from callback");
// // })


// // event object
// // btn.addEventListener('click', (e) => {
// //     console.log
// //     alert("hello world from callback");
// // })


// // if you click on btn 1 it should the alert "btn 1 is clicked"
// // if you click on btn 2 it should the alert "btn 2 is clicked"


// // let btn1 = document.querySelectorAll(".click-btn")[0];
// // let btn2 = document.querySelectorAll(".click-btn")[1];

// // btn1.addEventListener('click', ()=>{
// //     alert('btn 1 is clicked')
// // })
// // btn2.addEventListener('click', ()=>{
// //     alert('btn 2 is clicked')
// // })


// // let btns = document.querySelectorAll('.click-btn');
// // btns.forEach((item) =>{
// //     item.addEventListener('click', (e)=>{

// //         let btnName = e.target.textContent
// //         // console.log(`${btnName} is clicked`)
// //         // alert(`${btnName} is clicked`)
// //         // console.log(e.target)
// //         // alert('btn is clicked')
// //     })
// // })

// let btn = document.querySelector(".click-btn");
// // btn.addEventListener('click', (e)=>{
// //     console.log(e.target)
// // })


// btn.addEventListener('click', func);
// // btn.addEventListener('click', func2);

// // here func should be the same in addEventListener
// // and removeEventListner.
// // make sure that if there is an event you want to remove
// // int the function to not pass the function as an callback

// btn.removeEventListener('click', func);
// function func(){
//     console.log("hello1");
// }
// // function func2(){
// //     console.log("hello2");
// // }


// let form = document.querySelector('form');
// let div = document.querySelector('div');
// let p = document.querySelector('p');

// function eventBubling(){
//     form.addEventListener('click', ()=> alert("form is clicked"));
//     div.addEventListener('click', ()=> alert("div is clicked"));
//     p.addEventListener('click', ()=> alert("p is clicked"));
// }


// event bubbling
// when an event happens on an element, it first runs the 
// handlers on it, then its parents, the all the way up to its ancestot

// even capturing
// event  moves from ancestor/ parents to the child

// function eventCapture(){
//     form.addEventListener('click', ()=> alert("form is clicked"));
//     div.addEventListener('click', ()=> alert("div is clicked"));
//     p.addEventListener('click', ()=> alert("p is clicked"));
// }


// function eventBubling(){
//     form.addEventListener('click', ()=> alert("form is clicked"));
//     div.addEventListener('click', (e)=> {
//         e.stopPropogation();
//         alert("div is clicked")
//     });
//     p.addEventListener('click', (e)=>{
//         // this will stop the propogation of event
//         e.stopPropagation();
//         alert("p is clicked")
//     });
// }
// eventBubling();







// task when i click on add new item a new list element should be added in the list
// new item 1
// new item 2
// new item 3
// new item 4
// new item 5


let add = document.querySelector('#add');
let count = 0;
let todoList = document.querySelector('#todo-list');

add.addEventListener('click', ()=>{
    let li = document.createElement('li');
    count++;
    li.textContent = `New item ${count}`;
    todoList.append(li);
})

todoList.addEventListener('click', (e) =>{
    if(e.target.tagName == 'LI'){
        // console.log("hello");
        // console.log(e.target.classList)
        e.target.classList.toggle('done');
    }
    // console.log(e.target.tagName)
})


// event eligation -> a JavaScript design pattern where you attach a single event listener to a parent 
// element to manage events for 
// multiple child elements.

// Event deligation -> when we attach a single eventListner to 
// the parent element and then target its children.
// insted of assigning multiple lisner to its children