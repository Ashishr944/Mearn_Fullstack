// const list = document.getElementById("list");
// async function fetchData() {
//     try {
//         const resource = await fetch("https://jsonplaceholder.typicode.com/photos"); // source file
//         const data = await resource.json();
//         console.log(data); // print the data which is render
//         render(data); // calling render function 
//     } catch (err) {
//         console.log(err); // print error if unalble to load fetched data 
//     }
// }
// function render(data) {
//     const filterData = data.filter(
//         (item) => item.title === "reprehenderit est deserunt velit ipsam" // print specific data by filter 
//     );
//     filterData.forEach((item) => {
//         const li = document.createElement("li"); // create li element
//         li.textContent = item.url; // add element in list 
//         list.appendChild(li); // add element in end of list function
//     });
// }
// fetchData();





// const list = document.getElementById("list");
// async function fetchData(){
//     try{
//         const resource = await fetch("https://jsonplaceholder.typicode.com/photos")
//         const data = await resource.json();
//         console.log(data);
//         render(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// fetchData()
// function render(data){
//     const filteData = data.filter((item) => item.albumId === 1);
//     filteData.forEach((item) => {
//         const li = document.createElement("li");
//         li.textContent = item.title;
//         list.appendChild(li);
//     })
// }


// const list = document.getElementById("list");
// async function fetchData(){
//     try{
//         const source = await fetch("https://jsonplaceholder.typicode.com/photos")
//         const data = await source.json();
//         console.log(data);
//         render(data);
//     }
//     catch(err){
//         console.log("error");
//     }
// }
// fetchData();
// function render(data){
//     const filterData = data.filter((item) => item.albumId === 1)
//     filterData.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item.title;
//         list.appendChild(li);
//     });
// }


const list = document.getElementById("list");
async function fetchData() {
    try{
        const source = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await source.json();
        console.log(data);
        render();

    }
    catch{
        console.log("error");
    }
}
fetchData()
function render(data){
    const filterData = data.filter((item) => item.albumId === 1);
    filterData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.title;
        list.appendChild(li);
    });
}