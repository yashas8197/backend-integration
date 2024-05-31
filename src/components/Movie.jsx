import { useState } from "react";
import useFetch from "../useFetch";

const Movie = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://b7a038bf-a4a8-4f29-b7de-ea2f36ba9e8f-00-1mywra33khlw0.riker.replit.dev/movies",
  );

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://b7a038bf-a4a8-4f29-b7de-ea2f36ba9e8f-00-1mywra33khlw0.riker.replit.dev/movies/${movieId}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        throw "Failed to delete movie";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Movie Deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>
            {movie.title}{" "}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
};
export default Movie;
