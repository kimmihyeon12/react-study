import { useState } from "react/cjs/react.development";
import MovieForm from "../components/MovieForm";
import Movie from "../components/Movie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };
  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다";

  return (
    <>
      <h1 className="text-3xl">movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </>
  );
}
export default Movies;
