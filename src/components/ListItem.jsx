const List = ({ item }) => {


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

        <div className=" card card-info border-success">
          {(item.title || item.name) === (item.original_title || item.original_name) ? (
            <div className="card-title">
              Titolo: {item.title || item.name}
            </div>
          ) : (
            <>
              <div className="card-title">
                Titolo: {item.title || item.name}
              </div>
              <div className="card-title">
                Titolo Originale: {item.original_title || item.original_name}
              </div>
            </>
          )}
          <div className="card-body">
            <div className="card-text">
              {`Lingua:`}
              <span className={`fi fi-${handleLangFlag(item)}`}></span>
              {`(`}{item.original_language.toUpperCase()}{`)`}
            </div>
            <div className="card-text">
              {`Voto:`}
              {handleVote(item)}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default List
