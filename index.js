const express = require("express");
const app = express();
const {initializeDatabase} = require("./db/db.connect");
 const Movie = require("./models/movie.models");

 app.use(express.json());

initializeDatabase();

        const newMovie = {
                title: "New Movie",
                releaseYear: 2023,
                genre: ["Drama"],
                director: "Aditya Roy Chopra",
                actors: ["Actor1","Actor2"],
                language: "Hindi",
                country: "India",
                rating: 6.1,
                plot: "A young Man and Young Woman fall in love on a trip",
                awards: "IFA Filmfare Awards",
                posterUrl: "https://example.com/new-poster1.jpg",
                trailerUrl: "https://example.com/new-trailer1.mp4",

        };

        async function createMovie(newMovie){
            try{
                const movie = new Movie(newMovie);
                const saveMovie = await movie.save();
                console.log(saveMovie,"movie Data")
            }catch(error){
                throw error;
            }
        }
           
 //createMovie(newMovie);

 //find movie with titile

 async function readMovieByTitle(movieTitle){
    try{
        const movie = await Movie.find({title: movieTitle});
        return movie;
    }catch(error){
        throw error;
    }

 }

 app.get("/movies/:title",async(req,res)=>{
    try{
        const movie = await readMovieByTitle(req.params.title)
        if(movie){
        res.json(movie);
        }else{
            res.status(404).json({error:'Movie not Found'})
        }
    }catch(error){
        res.status(500).json({error:"Failed to fetch movie"});
    }
 })

 //find all movies

  async function readAllMovies(){
    try{
        const allMovies = await Movie.find();
        return allMovies;
    }catch(error){
        throw error;
    }
 }

 app.get("/movies",async(req,res)=>{
    try{
        const movies = await readAllMovies()
        if(movies.length !=0){
            res.json(movies);
        }else{
            res.status(404).json({error:"No movies found"})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch Movie."})
    }
 })

//  readAllMovies();

 //get movie by director

 async function readByDirector(directorName){
    try{
        const movieByDirector = await Movie.find({director: directorName});
        return movieByDirector;
    }catch(error){
        throw error;
    }
 }

app.get("/movies/director/:director",async(req,res)=>{
    try{
        const movies = await readByDirector(req.params.director)
        if(movies.length !=0){
            res.json(movies)
        }else{
            res.status(404).json({error:"Movie not Found"})
        }

    }catch(error){
        res.status(500).json({error:"Failed to fetch Movie"})
    }
})

async function readMovieByGenre(genreName){
    try{
        const movieGenre = await Movie.find({genre:genreName});
        return movieGenre;
    }catch(error){
        throw error;
    }
}

app.get("/movies/genre/:genreName",async(req,res)=>{
    try{
        const movies = await readMovieByGenre(req.params.genreName);
        if(movies.length !=0){
            res.json(movies);
        }else{
            res.status(404).json({error:"No movie found"});
        }
    }catch(error){
        res.status(500).json({error:"failed to fetch movies"});
    }
})
 const PORT = 3000
 app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
 })