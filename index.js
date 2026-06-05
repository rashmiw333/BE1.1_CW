const {initializeDatabase} = require("./db/db.connect");
const fs = require('fs');
 const Movie = require("./models/movie.models");
const TwitterProfile = require("./models/twitterProfile.models");
const { json } = require("stream/consumers");
initializeDatabase();
 const jsonData = fs.readFileSync('movies.json',"utf-8");
const jsonData1 = fs.readFileSync('profiles.json',"utf-8");
const moviesData = JSON.parse(jsonData);
const profilesData = JSON.parse(jsonData1);

function seedData(){
    try{
        for(const profileData of moviesData){
            const newMovie = new Movie({
                title: moviesData.title,
                releaseYear: moviesData.releaseYear,
                genre: moviesData.genre,
                director: moviesData.director,
                actors: moviesData.actors,
                language: moviesData.language,
                country: moviesData.country,
                rating: moviesData.rating,
                plot: moviesData.plot,
                awards: moviesData.awards,
                posterUrl: moviesData.posterUrl,
                trailerUrl: moviesData.trailerUrl,

            });
           newMovie.save();
        }

    }catch(error){
        console.log("Error seeding the Data",error);
    }
}

function seedProfilesData(){
    try{
        for(const profileData of profilesData){
            const newProfile = new TwitterProfile({
                fullName: profileData.fullName,
                username: profileData.username,
                bio: profileData.bio,
                profilePicUrl: profileData.profilePicUrl,
                followingCount: profileData.followingCount,
                followerCount: profileData.followerCount,
                companyName: profileData.companyName,
                location: profileData.location,
                portfolioUrl: profileData.portfolioUrl

            });
            newProfile.save();
        // console.log(newProfile);
        }

    }catch(error){
        console.log("Error seeding the Data",error);
    }
}

// seedData();
seedProfilesData();