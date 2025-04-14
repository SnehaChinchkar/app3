const Movie = require("../models/movie-model");
const adminDashboard = (req, res) => {
    res.json({ message: "Admin dashboard route working!" });
};
const addMovie = async (req, res) => {
    const { title, year, length, src } = req.body;
    try{
        const movie= await Movie.create({
            title,
            year,
            length,
            src
        });
        console.log("movie created",movie);
        res.status(201).json({ message: "Movie added successfully!" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
    
}
module.exports = { adminDashboard ,addMovie};
