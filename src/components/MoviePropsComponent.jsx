import "./MoviePropsComponent.css";

const MoviePropsComponent = (props) => {
  const { title, releaseDate, genre, rating, posterURL } = props;
  return (
    <>
      <div className="movie-card">
        <div className="movie-info">
          <h2>{title}</h2>
          <p>Release Date: {releaseDate}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="movie-poster">
          <img src={posterURL} alt={`Poster of ${title}`} />
        </div>
      </div>
    </>
  );
};

export default MoviePropsComponent;
