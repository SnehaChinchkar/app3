const MovieCard = ({ movie }) => {
    return (
      <div className="w-[300px] aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Movie Image */}
        <img src={movie.src} alt={movie.title} className="w-full h-[75%] object-cover" />
  
        {/* Movie Info */}
        <div className="p-3 mt-1 text-white">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <div className="flex justify-between text-sm text-gray-300 mt-3">
            <span>{movie.year}</span>
            <span>{movie.length}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  