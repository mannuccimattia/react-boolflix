import axios from "axios"
import { useState } from "react"

const List = ({ item, searchType }) => {

  // paths delle immagini dei poster
  const imgURL = `https://image.tmdb.org/t/p/w780${item.poster_path}`
  const imgBackdropURL = `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
  const imgPlaceholder = `../src/assets/placeholder.png`

  // variabili di stato per gestire i bottoni della card in hover
  const [cast, setCast] = useState(null);
  const [genres, setGenres] = useState(null);

  // funzione che prende la proprietà original_language degli oggetti ricevuti in risposta, li riformatta compatibilmente alle classi di flag-icons e corregge in caso di codice lingua diverso
  const handleLangFlag = (item) => {
    const lang = item.original_language.toLowerCase();

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

  // funzione che prende il voto degli oggetti di risposta e li converte in un voto in stelle
  const handleVote = (item) => {

    // arrotondo per eccesso il voto poi divido per 2. Ottengo un voto da 1 a 5 in step di 0.5
    let vote = parseInt(Math.ceil(item.vote_average)) / 2;

    // creo l'array vuoto che conterrà le stelle
    const stars = [];

    // variabili per le classi di font awesome
    const emptyStar = "far fa-star"
    const halfStar = "far fa-star-half-stroke"
    const fullStar = "fas fa-star"

    // ciclo 5 volte il voto
    for (let i = 1; i <= 5; i++) {
      (i <= vote)       // finchè i è <= al voto, pusho una stella piena
        ? (
          stars.push(<i key={i} className={fullStar}></i>)
        )
        : (i == vote.toFixed(0) && vote % 1 !== 0)    // quando la parte intera del voto è = a i E se ha decimali
          ? (
            stars.push(<i key={i} className={halfStar}></i>)    // pusho mezza stella
          )
          : (                                         // altrimenti pusho una stella vuota
            stars.push(<i key={i} className={emptyStar}></i>)
          )
    }

    return <span>{stars}</span>
  };

  // funzione che gestisce il click del pulsante "Info" della card in hover
  const handleMovieInfo = (e) => {
    e.preventDefault();

    // definisco gli endpoint delle chiamate ajax
    const castEndpoint = `https://api.themoviedb.org/3/${searchType}/${e.target.value}/credits?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f`;
    const genresEndPoint = `https://api.themoviedb.org/3/${searchType}/${e.target.value}?api_key=ddbf93c1fe82b9fa010c3cd4b41c556f`;

    // chiamata per recuperare i membri del cast
    axios.get(castEndpoint).then(res => {
      // prendo solo i primi 5
      const result = res.data.cast.slice(0, 5)
      setCast(result);
    });

    // chiamata per recuperare la lista di generi
    axios.get(genresEndPoint).then(res => {
      setGenres(res.data.genres);
    })
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 my-4">
      <div className="card-wrapper">

        <div className="card bg-dark text-success border-success">
          <img
            src={
              !imgURL.includes("null") ? (imgURL)
                : !imgBackdropURL.includes("null") ? (imgBackdropURL)
                  : imgPlaceholder
            }
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
                onClick={handleMovieInfo}
              >
                Info
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
                {(!cast) ? (
                  <div> . . . </div>
                ) : (cast.length === 0) ? (
                  <div>Cast non disponibile</div>
                ) : (
                  <ul className="list-unstyled ps-2">
                    {cast.map(pers => (
                      <li key={pers.id}>{pers.name}</li>
                    ))}
                  </ul>
                )}
                {(!genres) ? (
                  <div> . . . </div>
                ) : (genres.length === 0) ? (
                  <div>Genere non disponibile</div>
                ) : (
                  <div>
                    <h6>Generi:</h6>
                    {genres.map(elem => (
                      <em key={elem.id} className="me-2">
                        {elem.name}
                      </em>
                    ))}
                  </div>
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
