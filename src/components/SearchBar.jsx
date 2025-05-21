import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import SearchTypeContext from "../contexts/SearchTypeContext";
import SearchByGenre from "./SearchByGenre";

const SearchBar = ({
  setList,
}) => {

  // utilizzo il contesto SearchTypeContext destrutturandolo
  const SearchType = useContext(SearchTypeContext)
  const { searchType, setSearchType } = SearchType;

  // variabile di stato per gestire la barra di ricerca
  const [searchTerm, setSearchTerm] = useState("");


  // funzione che, al click del pulsante Movies o TV Series, assegna il valore rispettivo alla variabile searchType 
  const handleSearchType = (e) => {
    e.preventDefault()
    setSearchType(e.target.value)
    setList(null)
  }

  // funzione che, al submit della searchbar, effettua una chiamata ajax all'endpoint definito con le variabili searchType e searchTerm
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const endPoint = `https://api.themoviedb.org/3/search/${searchType}?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`

    axios.get(endPoint).then(res => setList(res.data.results));
    // svuoto la searchbar
    setSearchTerm("")
  };

  return (
    <>
      <header>
        <nav className="container-fluid bg-dark text-white py-2">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto d-flex justify-content-start align-items-center">
              <img src="../src/assets/logo.png" alt="logo" />
              <h3>CarribeFlix</h3>
            </div>

            <div className="col-12 col-md-6 text-center my-2">
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    id="search"
                    className="form-control bg-secondary border-0 text-white"
                    placeholder={`Cerca ${searchType === "movie" ? `Film` : `Serie TV`}...`}
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                  />
                  <button className="btn btn-success">Vai!</button>
                </div>
              </form>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-success me-2"
                value="movie"
                disabled={searchType === "movie"}
                onClick={handleSearchType}
              >
                Movies
              </button>
              <button
                className="btn btn-success"
                value="tv"
                disabled={searchType === "tv"}
                onClick={handleSearchType}
              >
                TV Series
              </button>
            </div>
          </div>

        </nav>
        <div className="container-fluid bg-secondary border-bottom border-dark" id="genresSearch">
          <div className="container">
            <SearchByGenre />
          </div>
        </div>
      </header>
    </>
  )
}

export default SearchBar

