import useFetch from "../useFetch";

const Movie = () => {
  const { data, loading, error } = useFetch(
    "https://b7a038bf-a4a8-4f29-b7de-ea2f36ba9e8f-00-1mywra33khlw0.riker.replit.dev/movies",
  );

  return (
    <div>
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movie;
