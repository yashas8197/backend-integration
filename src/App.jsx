import Movie from "./components/Movie";
import MovieByTitle from "./components/MovieByTitle";

export default function App() {
  return (
    <main>
      <Movie />
      <MovieByTitle title="3 Idiots" />
    </main>
  );
}
