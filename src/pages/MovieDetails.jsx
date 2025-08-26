import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const handleWatchClick = () => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " trailer")}`, "_blank");
  };

  const handleDownload = () => {
    window.open(`https://www.google.com/search?q=download+${encodeURIComponent(movie.title + " movie")}`, "_blank");
  };


  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleWatchClick} style={{ marginRight: "10px" }}>Watch Trailer</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}

export default MovieDetails;