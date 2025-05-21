import SearchBar from "./components/SearchBar";
import { useState } from "react"

import ListContext from "./contexts/ListContext";
import SearchTypeContext from "./contexts/SearchTypeContext";
import Main from "./components/Main";

const App = () => {

  // variabile di stato per gestire il tipo di ricerca (default: movie)
  const [searchType, setSearchType] = useState("movie");
  // variabile di stato per gestire la lista di film/serie
  const [list, setList] = useState(null);

  return (
    <>
      <SearchTypeContext.Provider value={{ searchType, setSearchType }}>

        <ListContext.Provider value={list}>

          <SearchBar setList={setList} />

          <Main />

        </ListContext.Provider>

      </SearchTypeContext.Provider>
    </>
  )
}

export default App