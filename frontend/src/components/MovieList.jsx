import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/user/movies")
      .then((response) => {
        setMovies(response.data.movieList); 
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

    
  }, []); // Empty array ensures it runs only once on component mount

  return (

    <div className="flex gap-4 p-6 bg-gray-900 flex-wrap">
  {movies.map((movie) => (
    <MovieCard key={movie._id} movie={movie} />
  ))}
</div>

  );
};

export default MovieList;