import "./MoviePropsComponent.css";
import ViewMovie from "./ViewMovie";
import { useState } from "react";

const MoviePropsComponent = (props) => {
  const { title, releaseDate, genre, rating, posterURL } = props;
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <div className="movie-card">
        <div className="movie-info">
          <h2>{title}</h2>
          <p>Release Date: {releaseDate}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
          <button className="btn btn-primary" onClick={handleViewDetails}>
            View Movie Details
          </button>
        </div>
        <div className="movie-poster">
          <img src={posterURL} alt={`Poster of ${title}`} />
        </div>
      </div>
      {showDetails && (
        <ViewMovie
          title={title}
          releaseDate={releaseDate}
          genre={genre}
          rating={rating}
          posterURL={posterURL}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};

export default MoviePropsComponent;
