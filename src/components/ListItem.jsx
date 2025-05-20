const List = ({ item }) => {

  const imgURL = `https://image.tmdb.org/t/p/w780${item.poster_path}`

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
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 2) {
      return <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 3) {
      return <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </span>;
    } else if (vote <= 4) {
      return <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </span>;
    } else {
      return <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </span>;
    }
  };

  return (
    <div className="card w-25">
      <img src={imgURL} alt={item.title} className="card-img-top" />

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
  )
}

export default List
