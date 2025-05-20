import axios from "axios";
import { useState } from "react"

const options = {
  url: 'https://api.themoviedb.org/3/search/movie?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=ritorno',

};

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`

    axios.get(endPoint).then(res => console.log(res.data.results))
  }

  console.log(searchTerm)
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

      {searchTerm}
    </>
  )
}

export default App