import axios from "axios"
import { useState } from "react"

const List = ({ item, searchType }) => {


  /* ******************************************** */
  /*                    RICORDA                   */
  /* ******************************************** */
  // PROVA imgURL, SE INCLUDE NULL -> BACKDROP, SE INCLUDE NULL -> PLACEHOLDER
  /* ******************************************** */
  /*                    RICORDA                   */
  /* ******************************************** */
  const imgURL = `https://image.tmdb.org/t/p/w780${item.poster_path}`
  const imgBackdropURL = `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
  const imgPlaceholder = `../src/assets/placeholder.png`

  const [cast, setCast] = useState(null);
  const [movieID, setMovieID] = useState("");

  const handleLangFlag = (item) => {
    const lang = item.original_language.toLowerCase()

    switch (lang) {
      case "en":
        return "gb";
      case "ja":
        return "jp";
      case "zh":
        return "cn";
      case "ko":
        return "kr";
      case "cs":
        return "cz";
      case "da":
        return "dk";
      default:
        return lang;
    }
  }

  const handleVote = (item) => {
    let vote = parseInt(Math.ceil(item.vote_average)) / 2

    if (vote <= 1) {
      return <span>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 2) {
      return <span>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 3) {
      return <span>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 4) {
      return <span>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>;
    } else {
      return <span>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </span>;
    }
  };

  const handleMovieCast = (e) => {
    e.preventDefault();

    setMovieID(e.target.value);
    const endPoint = `https://api.themoviedb.org/3/${searchType}/${e.target.value}/credits?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f`;

    axios.get(endPoint).then(res => {
      const result = res.data.cast.slice(0, 5)
      setCast(result);
    });
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 my-4">
      <div className="card-wrapper">

        <div className="card bg-dark text-success border-success">
          <img
            src={imgURL || imgBackdropURL || imgPlaceholder}
            alt="cover"
            className="card-img img-fluid"
          />
        </div>

        <div className=" card card-info border-success p-3">
          <div className="card-title-wrapper">

            {(item.title || item.name) === (item.original_title || item.original_name) ? (
              <div className="card-title">
                {item.title || item.name}
              </div>
            ) : (
              <>
                <div className="card-title">
                  {item.title || item.name}
                </div>
                <div className="card-title card-title-sm">
                  ({item.original_title || item.original_name})
                </div>
              </>
            )}

          </div>


          <div id="overview">

            <p className="d-inline-flex gap-2">
              <button
                className="btn btn-outline-success btn-sm"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseOverview-${item.id}`}
                type="button"
                aria-expanded="false"
                aria-controls={`collapseOverview-${item.id}`}
              >
                Overview
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseCast-${item.id}`}
                aria-expanded="false"
                aria-controls={`collapseCast-${item.id}`}
                value={item.id}
                onClick={handleMovieCast}
              >
                Cast
              </button>
            </p>
            <div className="collapse" id={`collapseOverview-${item.id}`}>
              <div className="card-text">
                <h6>Overview:</h6>
                {item.overview || "Nessuna descrizione disponibile"}
              </div>
            </div>
            <div className="collapse" id={`collapseCast-${item.id}`}>
              <div className="card-body">
                <h6>Cast:</h6>
                {(!cast || cast.length == 0) ? (
                  <div>Cast non disponibile</div>
                ) : (
                  <ul className="list-unstyled ps-2">
                    {cast.map(pers => (
                      <li key={pers.id}>{pers.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="card-footer text-success">

            <div className="card-text">
              <span className={`fi fi-${handleLangFlag(item)}`}></span>
              {`(`}{item.original_language.toUpperCase()}{`)`}
            </div>
            <div className="card-text">
              {handleVote(item)}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default List
