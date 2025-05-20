import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("movie");
  const [list, setList] = useState(null);


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const endPoint = `https://api.themoviedb.org/3/search/${searchType}?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`

    // const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`;

    axios.get(endPoint).then(res => setList(res.data.results));
  };

  const handleSearchType = (e) => {
    e.preventDefault()
    setSearchType(e.target.value)
    setList(null)
  }


  return (
    <>
      <h1>Hello React</h1>

      <div>
        Stai cercando {
          searchType === "movie" ? `Film` : `Serie TV`}
      </div>

      <form onSubmit={handleSearchSubmit}>
        <button
          className="btn btn-primary"
          value="movie"
          disabled={searchType === "movie"}
          onClick={handleSearchType}
        >
          Movies
        </button>
        <button
          className="btn btn-primary"
          value="tv"
          disabled={searchType === "tv"}
          onClick={handleSearchType}
        >
          TV Series
        </button>

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
        <div>
          {!list ? (
            <div className="col-12">
              <h4>Niente da mostrare {`:(`}</h4>
              <span>Cerca qualcosa...</span>
            </div>
          ) : (
            <div className="col-12 d-flex flex-wrap">
              {list.map(item => (
                <div className="card w-25" key={item.id}>
                  <div className="card-title">Titolo: {item.title || item.name}</div>
                  <div className="card-title">TitoloOriginale: {item.original_title || item.original_name}</div>
                  <div className="card-text">
                    Lingua:
                    <span className={`fi fi-${item.original_language.toLowerCase()}`}></span>({item.original_language.toUpperCase()})
                  </div>
                  <div className="card-text">Voto: {item.vote_average}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App