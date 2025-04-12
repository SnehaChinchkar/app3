import MovieCard from "./MovieCard";
const movies = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?q=80&w=500&auto=format&fit=crop",
      title: "Movie 1",
      year: "2024",
      length: "2h 10m",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1742107082664-83b3125267ac?q=80&w=500&auto=format&fit=crop",
      title: "Movie 2",
      year: "2023",
      length: "1h 45m",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?q=80&w=500&auto=format&fit=crop",
        title: "Movie 1",
        year: "2024",
        length: "2h 10m",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1742107082664-83b3125267ac?q=80&w=500&auto=format&fit=crop",
        title: "Movie 2",
        year: "2023",
        length: "1h 45m",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?q=80&w=500&auto=format&fit=crop",
        title: "Movie 1",
        year: "2024",
        length: "2h 10m",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1742107082664-83b3125267ac?q=80&w=500&auto=format&fit=crop",
        title: "Movie 2",
        year: "2023",
        length: "1h 45m",
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?q=80&w=500&auto=format&fit=crop",
        title: "Movie 1",
        year: "2024",
        length: "2h 10m",
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1742107082664-83b3125267ac?q=80&w=500&auto=format&fit=crop",
        title: "Movie 2",
        year: "2023",
        length: "1h 45m",
      },
      
  ];
  
  const MovieList = () => {
    return (
      <div className="flex gap-4 p-6 bg-gray-900 flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };
  
  export default MovieList;
  