import axios from "axios";
import { useState, useContext, useEffect } from "react";
import SearchTypeContext from "../contexts/SearchTypeContext";

const SearchByGenre = () => {

  const [searchGenres, setSearchGenres] = useState(null);
  const { searchType, setGenreFilter } = useContext(SearchTypeContext);

  const getGenres = () => {
    const genresListEndPoint = `https://api.themoviedb.org/3/genre/${searchType}/list?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f`;

    axios.get(genresListEndPoint).then(res => setSearchGenres(res.data.genres))
  }

  useEffect(() => {
    getGenres();
  }, [searchType]);

  return (
    <>
      <div className="row align-items-middle gy-2 pb-2">
        {!searchGenres ? (
          <div> . . . </div>
        ) : (
          <>
            {searchGenres.map(gen => (
              <div key={gen.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                <button
                  className="btn btn-dark btn-sm gen-btn"
                  value={gen.name}
                  onClick={e => setGenreFilter(e.target.value)}
                >
                  {gen.name}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default SearchByGenre
