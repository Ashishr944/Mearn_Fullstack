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


let adminEmail = "admin@gmail.com"
let adminPassword = "adminpass";

// for the below dynamic route fetch all the movie in that genre
app.get('/movie/:genre', (req, res) => {
    const { genre } = req.params;
    const filterMovies = movie.filter(
        (item) => item.genre.toLowerCase() === genre.toLowerCase()
    );
    res.json(filterMovies);
});


// Post
app.post("/login", (req, res)=>{
    // const email = req.body.email;
    // const password = req.body.password;
    const {adminEmail} = req.body;
    const {adminPassword} = req.body;
    if(adminEmail == adminEmail && adminPassword == adminPassword){
        res.status(201).json({message: "admin login successful"});
    }
    else{
        res.status(400).json({message: "wrong credentials"})
    }
})

// Output:
// {
//     "message": "admin login successful"
// }



// get movie details from postman and insert it inside movie array
app.post("/movie", (req, res) =>{
    const {tittle, genre, watched} = req.body;
    // let obj = {
    //     id: movie.length+ 1,
    //     title: title,
    //     genre: genre,
    //     watched: watched
    // }  

    // or

    let obj = {
        id: movie.length+ 1,
        tittle,
        genre,
        watched
    } 

    movie.push(obj);
    res.json(movie);
})


// for the bewlow route id the movie with that id exists send the name of that movie as response
// and if it does not then send an error message with the appropriate status code
app.get("/getmovies/:id", (req, res) =>{
    const {id} = req.params;
    // const filteredMovies = movie.filter(item=> item.id == id);
    // if(filteredMovies.length == 0){
    //     res.status(404).send("movie does not exist")
    // }
    // else{
    //     res.status(200).send(filteredMovies[0].tittle);
    // }


    // or

    const movies = movie.find(item=> item.id == id);
    if(!movies){
        res.status(404).send("movie does not exist")
    }
    else{
        res.status(200).send(movies.tittle);
    }
    
    // to get an object of array
    res.json(movies)
    
})