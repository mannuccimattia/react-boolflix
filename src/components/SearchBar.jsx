
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
    </>
  )
}

export default SearchBar

