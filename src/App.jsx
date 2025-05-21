import SearchBar from "./components/SearchBar";
import { useState } from "react"

import List from "./components/List";
import ListContext from "./contexts/ListContext";
import Main from "./components/Main";

const App = () => {

  // variabile di stato per gestire il tipo di ricerca (default: movie)
  const [searchType, setSearchType] = useState("movie");
  // variabile di stato per gestire la lista di film/serie
  const [list, setList] = useState(null);

  return (
    <>
      <ListContext.Provider value={list}>

        <SearchBar
          searchType={searchType}
          setSearchType={setSearchType}
          setList={setList}
        />

        <Main
          searchType={searchType}
        />

      </ListContext.Provider>
    </>
  )
}

export default App