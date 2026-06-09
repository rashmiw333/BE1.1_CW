const {initializeDatabase} = require("./db/db.connect");
 const Movie = require("./models/movie.models");

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
        console.log(movie);
    }catch(error){
        throw error;
    }

 }
//  readMovieByTitle("Lagaan")

 //find all movies

  async function readAllMovies(){
    try{
        const allMovies = await Movie.find();
        console.log(allMovies);
    }catch(error){
        throw error;
    }

 }

//  readAllMovies();

 //get movie by director

 async function readByDirector(directorName){
    try{
        const movieByDirector = await Movie.find({director: directorName});
        console.log(movieByDirector);
    }catch(error){
        throw error;
    }
 }

 readByDirector("Rajkumar Hirani");