import SearchBar from "./components/SearchBar";
import ListItem from "./components/ListItem";
import { useState } from "react"

const App = () => {

  // variabile di stato per gestire il tipo di ricerca (default: movie)
  const [searchType, setSearchType] = useState("movie");
  // variabile di stato per gestire la lista di film/serie
  const [list, setList] = useState(null);

  return (
    <>
      <header>
        <SearchBar
          searchType={searchType}
          setSearchType={setSearchType}
          setList={setList}
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