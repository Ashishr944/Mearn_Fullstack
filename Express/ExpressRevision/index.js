import express from "express"

const app = express();
const PORT = 3000;

// this is how we create a global middleware
app.use(express.json());

// this is how you start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

const movie = [
    {id:1, tittle: "apple", genre: "sci-fi", watched: true},
    {id:2, tittle: "B", genre: "sci-fi", watched: false},
    {id:3, tittle: "C", genre: "drama", watched: true},
    {id:4, tittle: "D", genre: "horror", watched: true},
    {id:5, tittle: "A", genre: "sci-fi", watched: false},
]

// get movie details from postman and insert it inside movies array
// in response send the whole movie array to check

// app.post("/movie", (req, res) =>{
//     const {tittle, genre, watched} = req.body;
//     // let obj = {
//     //     id: movie.length+ 1,
//     //     title: title,
//     //     genre: genre,
//     //     watched: watched
//     // }  

//     // or

//     let obj = {
//         id: movie.length+ 1,
//         tittle,
//         genre,
//         watched
//     } 

//     movie.push(obj);
//     res.json(movie);
// })

// app.get("/movies", (req, res) =>{
//     res.json(movie);
// })

// Note: If the routes are same remember to keep the methods different, if both are same them the 1st route is created only hits



// getting perticular details about a movie adn updation that movie
// app.patch("/movies/:id", (req, res)=>{
//     const {id} = req.params;
//     console.log(id);
//     const {watched, tittle, genre} = req.body;
//     const searchMovie = movie.find(item => item.id == id);
//     if(!searchMovie){
//         res.status(404).send("movie does not exist");
//     }
//     if(watched !== undefined){
//         searchMovie.watched = watched;
//     }
//     if(tittle !== undefined){
//         searchMovie.tittle = tittle;
//     }
//     if(genre !== undefined){
//         searchMovie.genre = genre
//     }

//     const index = movie.findIndex(m => m.id == id)
//     movie[index] = searchMovie;
//     res.json(movie)

//     // res.send("Route is working")
// })



// app.put("/movies/:id", (req, res) =>{
//     const {id} = req.params;
//     const {watched, tittle, genre} = req.body;
//     const searchMovie = movie.find(item => item.id == id);
//     const index = movie.findIndex(m => m.id == id);
    
//     if(!searchMovie){
//         res.status(404).send("movise does not exist");
//     }
//     const updateMovie = {
//         id: Number(id), tittle, genre, watched
//     }
//     movie[index] = updateMovie
//     res.json(movie);
// })

// Output:
// [
//     {
//         "id": 1,
//         "tittle": "apple",
//         "genre": "sci-fi",
//         "watched": true
//     },
//     {
//         "id": 2,
//         "tittle": "jumanji",
//         "genre": "Adventure",
//         "watched": false
//     },
//     {
//         "id": 3,
//         "tittle": "C",
//         "genre": "drama",
//         "watched": true
//     },
//     {
//         "id": 4,
//         "tittle": "D",
//         "genre": "horror",
//         "watched": true
//     },
//     {
//         "id": 5,
//         "tittle": "A",
//         "genre": "sci-fi",
//         "watched": false
//     }
// ]



// app.delete("/movies/:id", (req, res) =>{
//     const { id } = req.params;

//     const index = movie.findIndex(m => m.id == id);

//     if (index === -1) {
//         return res.status(404).send("Movie does not exist");
//     }

//     movie.splice(index, 1);

//     res.json(movie);

// })


// Output:
// [
//     {
//         "id": 1,
//         "tittle": "apple",
//         "genre": "sci-fi",
//         "watched": true
//     },
//     {
//         "id": 3,
//         "tittle": "C",
//         "genre": "drama",
//         "watched": true
//     },
//     {
//         "id": 4,
//         "tittle": "D",
//         "genre": "horror",
//         "watched": true
//     },
//     {
//         "id": 5,
//         "tittle": "A",
//         "genre": "sci-fi",
//         "watched": false
//     }
// ]

const todos = [
    {id: 100, task: "todo1", complete: false},
    {id: 101, task: "todo2", complete: true},
    {id: 102, task: "todo3", complete: true},
    {id: 103, task: "todo4", complete: false},

]

// GET - get all todos
// app.get("/todo", (req, res) => {
//     res.json(todos);
// });

// Ouput:[
//     {
//         "id": 100,
//         "task": "todo1",
//         "complete": false
//     },
//     {
//         "id": 101,
//         "task": "todo2",
//         "complete": true
//     },
//     {
//         "id": 102,
//         "task": "todo3",
//         "complete": true
//     },
//     {
//         "id": 103,
//         "task": "todo4",
//         "complete": false
//     }
// ]


// POST - create a todo
// app.post("/todo", (req, res) => {
//     const { task } = req.body;

//     const newTodo = {
//         id: todos.length > 0
//             ? Math.max(...todos.map(todo => todo.id)) + 1
//             : 100,
//         task,
//         complete: false
//     };

//     todos.push(newTodo);

//     res.status(201).json(newTodo);
// });


//body input:
// {
//     "id": 104,
//     "task": "Learn Express",
//     "complete": false
// }


//Outpu:
// {
//     "id": 104,
//     "task": "Learn Express",
//     "complete": false
// }

// PATCH - toggle completed
// app.patch("/todo/toggle-completed/:id", (req, res) => {
//     const { id } = req.params;

//     const todo = todos.find(todo => todo.id == id);

//     if (!todo) {
//         return res.status(404).send("Todo does not exist");
//     }

//     todo.complete = !todo.complete;

//     res.json(todo);
// });


// Before:

// {
//     "id": 100,
//     "task": "todo1",
//     "complete": false
// }

// After:
// {
//     "id": 100,
//     "task": "todo1",
//     "complete": true
// }

// PUT - edit todo
// app.put("/todo/:id", (req, res) => {
//     const { id } = req.params;
//     const { task, complete } = req.body;

//     const index = todos.findIndex(todo => todo.id == id);

//     if (index === -1) {
//         return res.status(404).send("Todo does not exist");
//     }

//     const updatedTodo = {
//         id: Number(id),
//         task,
//         complete
//     };

//     todos[index] = updatedTodo;

//     res.json(updatedTodo);
// });

// Body:
// {
//     "task": "Learn Node.js",
//     "complete": true
// }

// Ouput:
// {
//     "id": 100,
//     "task": "Learn Node.js",
//     "complete": true
// }


// DELETE - delete todo
// app.delete("/todo/:id", (req, res) => {
//     const { id } = req.params;

//     const index = todos.findIndex(todo => todo.id == id);

//     if (index === -1) {
//         return res.status(404).send("Todo does not exist");
//     }

//     todos.splice(index, 1);

//     res.json({
//         message: "Todo deleted successfully",
//         todos
//     });
// });


// ouput:
// {
//     "message": "Todo deleted successfully",
//     "todos": [
//         {
//             "id": 101,
//             "task": "todo2",
//             "complete": true
//         },
//         {
//             "id": 102,
//             "task": "todo3",
//             "complete": true
//         },
//         {
//             "id": 103,
//             "task": "todo4",
//             "complete": false
//         }
//     ]
// }