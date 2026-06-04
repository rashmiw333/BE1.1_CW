const mongooes = require("mongoose");

const movieSchema = new mongooes.Schema({
    title:{
        type: String,
        required: true
    },
    releaeYear:{
        type: Number,
        required: true
    },
    genre:{
        type: String,
        enum:["Action","Drama","Comedy","Rhomance","Thriller","Fantacy","Sci-Fi","Horror",
            "Sports","Musical"],
    },
    director:{
        type:String,
        req:true
    },
    actors:{
        type:String
    },
    language:{
        type: String,
        required: true
    },
    country:{
        type:String,
        default: "India"
    },
    rating:{
        type:Number,
        min:0,
        max:10,
        default:0,
    },
    plot:{
        type: String
    },
    awards:{
        type: String
    },
    posterUrl:{
        type: String,

    },
    trailerUrl:{
        type:String
    },   
},
{timeStamps:true},
);

const Movie = mongooes.model("Movie",movieSchema);

module.exports = Movie;