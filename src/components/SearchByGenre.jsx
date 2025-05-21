import axios from "axios";
import { useState, useContext, useEffect } from "react";
import SearchTypeContext from "../contexts/SearchTypeContext";

const SearchByGenre = () => {

  const [searchGenres, setSearchGenres] = useState(null);

  const { searchType, genreFilter, setGenreFilter } = useContext(SearchTypeContext);

  const getGenres = () => {
    const genresListEndPoint = `https://api.themoviedb.org/3/genre/${searchType}/list?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f`;

    axios.get(genresListEndPoint).then(res => setSearchGenres(res.data.genres))
  }

  useEffect(() => {
    getGenres();
  }, [searchType]);

  return (
    <>
      <div className="row align-items-middle py-3 gy-2">
        {!searchGenres ? (
          <div> . . . </div>
        ) : (
          <>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-2">
              <button
                className={
                  `btn btn-${"" === genreFilter
                    ? `success` : `dark`
                  } btn-sm gen-btn`
                }
                value={""}
                disabled={"" === genreFilter}
                onClick={e => setGenreFilter(e.target.value)}
              >
                Tutti
              </button>
            </div>
            {searchGenres.map(gen => (
              <div key={gen.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-2">
                <button
                  className={
                    `btn btn-${gen.id === parseInt(genreFilter)
                      ? `success` : `dark`
                    } btn-sm gen-btn`
                  }
                  value={gen.id}
                  disabled={gen.id === parseInt(genreFilter)}
                  onClick={e => setGenreFilter(e.target.value)}
                >
                  {gen.name}
                </button>
              </div>
            ))}
          </>
        )}
      </div >
    </>
  )
}

export default SearchByGenre
