import axios from "axios";
import { useState } from "react"

import SearchBar from "./components/SearchBar";
import ListItem from "./components/ListItem";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("movie");
  const [list, setList] = useState(null);


  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const endPoint = `https://api.themoviedb.org/3/search/${searchType}?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f&query=${searchTerm}`

    axios.get(endPoint).then(res => setList(res.data.results));
    setSearchTerm("")
  };


  return (
    <>
      <header>
        <SearchBar
          searchTerm={searchTerm}
          searchType={searchType}
          setSearchTerm={setSearchTerm}
          setSearchType={setSearchType}
          setList={setList}
          handleSearchSubmit={handleSearchSubmit}
        />
      </header>

      <div className="container">
        {!list ? (
          <div className="row">
            <div className="col-12 text-center text-secondary">
              <i className="fa-solid fa-face-sad-tear display-1 my-3"></i>
              <h4>Niente da mostrare</h4>
              <span>Cerca qualcosa...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {list.map(item => (
              <ListItem
                key={item.id}
                item={item}
                searchType={searchType}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App