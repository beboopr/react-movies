import movies from "../movies";

function MovieList() {
    return (
        <section id="movie-list-container">
            {movies.map(movie => (
            <div className="movie-card" key={movie.id}>
            <img className="movie-poster" 
            src={movie.posterURL} 
            alt={movie.title}/>
            <h3 className="movies-title">
            {movie.title}
            </h3>
            </div>
            ))}
        </section>
    )
}

export default MovieList;