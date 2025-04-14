const User = require('../models/user-model');
const Movie= require('../models/movie-model');
const getUserProfile = (req, res) => {
    res.json({ message: "User profile route working!" });
};
const getMovie= async (req, res) => {
    try{
        const movieList= await Movie.find({});
        if(movieList.length===0){
            return res.status(404).json({ message: "No movies found!" });
        }
        res.status(200).json({ movieList });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
}
const getSpecificMovie= async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found!" });
        }
        res.status(200).json({ movie });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
}
module.exports = { getUserProfile ,getMovie,getSpecificMovie};
