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
      <h1>Hello React</h1>

      <SearchBar
        searchTerm={searchTerm}
        searchType={searchType}
        setSearchTerm={setSearchTerm}
        setSearchType={setSearchType}
        setList={setList}
        handleSearchSubmit={handleSearchSubmit}
      />

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
                <ListItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App