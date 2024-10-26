import "./ViewMovie.css";

const ViewMovie = ({
  title,
  releaseDate,
  genre,
  rating,
  posterURL,
  onClose,
}) => {
  return (
    <div className="pop-movie-details-card">
      <button className="btn close-button" onClick={onClose}>
        X
      </button>
      <h2 className="pop-movie-title">{title}</h2>
      <p className="pop-movie-release-date">Release Date: {releaseDate}</p>
      <p className="pop-movie-genre">Genre: {genre}</p>
      <p className="pop-movie-rating">Rating: {rating}</p>
      <img src={posterURL} alt={`Poster of ${title}`} className="pop-movie-poster" />
    </div>
  );
};

export default ViewMovie;
