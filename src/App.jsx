import AddMovieForm from "./components/AddMovieForm";
import Movie from "./components/Movie";
import MovieByTitle from "./components/MovieByTitle";

export default function App() {
  return (
    <main>
      <AddMovieForm />
      <Movie />
      <MovieByTitle title="3 Idiots" />
    </main>
  );
}
