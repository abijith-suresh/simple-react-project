import MoviePropsComponent from "./MoviePropsComponent";

const MovieComponent = () => {
  const movies = [
    {
      title: "Inception",
      releaseDate: "July 16, 2010",
      genre: "Action, Sci-Fi, Thriller",
      rating: "8.8/10",
      posterURL: "https://m.media-amazon.com/images/I/71DwIcSgFcS._SL1500_.jpg",
    },
    {
      title: "The Shawshank Redemption",
      releaseDate: "September 23, 1994",
      genre: "Drama",
      rating: "9.3/10",
      posterURL: "https://m.media-amazon.com/images/I/71JxA6I+sgL._SL1000_.jpg",
    },
    {
      title: "The Godfather",
      releaseDate: "March 24, 1972",
      genre: "Crime, Drama",
      rating: "9.2/10",
      posterURL: "https://m.media-amazon.com/images/I/81C9FT0-8CL._SL1500_.jpg",
    },
    {
      title: "The Dark Knight",
      releaseDate: "July 18, 2008",
      genre: "Action, Crime, Drama",
      rating: "9.0/10",
      posterURL: "https://m.media-amazon.com/images/I/81CLFQwU-WL._SL1500_.jpg",
    },
    {
      title: "Pulp Fiction",
      releaseDate: "October 14, 1994",
      genre: "Crime, Drama",
      rating: "8.9/10",
      posterURL:
        "https://m.media-amazon.com/images/I/718LfFW+tIL._AC_SL1280_.jpg",
    },
  ];

  let movieElements = [];

  movies.forEach((movie) => {
    movieElements.push(
      <MoviePropsComponent
        title={movie.title}
        releaseDate={movie.releaseDate}
        genre={movie.genre}
        rating={movie.rating}
        posterURL={movie.posterURL}
      />
    );
  });

  return <>{movieElements}</>;
};

export default MovieComponent;
