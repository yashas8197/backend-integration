import { useEffect } from "react";
import useFetch from "../useFetch";

const MovieByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://b7a038bf-a4a8-4f29-b7de-ea2f36ba9e8f-00-1mywra33khlw0.riker.replit.dev/movie/${title}`,
  );

  console.log(data);
  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Director: {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Awards: {data.awards}</p>
      <p>Plot: {data.plot}</p>
      <p>Actors: yy{data.actors.join(", ")}</p>
      <img src={data.posterUrl} alt="Poster Image" />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieByTitle;
