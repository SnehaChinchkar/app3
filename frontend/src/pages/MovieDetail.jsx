import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data.movie));
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  console.log("movie", movie);  
  return (
    <div className="mt-10 ml-6 max-w-3xl p-6 bg-gray-900 text-white rounded-lg shadow-md">
  <img 
    src={movie.src} 
    alt={movie.title} 
    className="w-full h-[400px] object-cover rounded-md mb-6"
  />
  <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
  <div className="text-gray-400 text-lg mb-1">Year: {movie.year}</div>
  <div className="text-gray-400 text-lg mb-1">Length: {movie.length}</div>
</div>

  );
};
export default MovieDetail;