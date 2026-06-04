const mongooes = require ("mongooes");

const carSchema = new mongoose.Schema({
    model:String,
    releaseYear:Number,
    make: String
});

const Car = mongooes.model('Car',carSchema);

module.exports = Car;