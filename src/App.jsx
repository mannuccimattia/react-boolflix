import axios from "axios";
import { useState } from "react"

const options = {
  url: 'https://api.themoviedb.org/3/search/movie?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=ritorno',

};

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(null);


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`;

    axios.get(endPoint).then(res => setMovies(res.data.results));
  };

  return (
    <>
      <h1>Hello React</h1>

      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <button>Go!</button>
      </form>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          {!movies ? (
            <div>loading</div>
          ) : (
            <>
              {movies.map(movie => (
                <div className="card" key={movie.id}>
                  <div className="card-title">Titolo: {movie.title}</div>
                  <div className="card-title">TitoloOriginale: {movie.original_title}</div>
                  <div className="card-text">Lingua: {movie.original_language}</div>
                  <div className="card-text">Voto: {movie.vote_average}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App