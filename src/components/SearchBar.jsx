
const SearchBar = ({
  searchTerm,
  searchType,
  setSearchTerm,
  setSearchType,
  setList,
  handleSearchSubmit
}) => {

  const handleSearchType = (e) => {
    e.preventDefault()
    setSearchType(e.target.value)
    setList(null)
  }

  return (
    <>



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
    </>
  )
}

export default SearchBar

