import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <div className="text-3xl py-4 text-white">
        <h1>{title}</h1>
      </div>
      <div className="flex hover:overflow-x-scroll">
        <div className="flex">
            {movies?.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))}
        </div>
      </div>

    </div>
  );
};

export default MovieList;
