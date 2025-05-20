const List = ({ item }) => {

  return (
    <div className="card w-25">
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
        <span className={`fi fi-${item.original_language.toLowerCase()}`}></span>
        {`(`}{item.original_language.toUpperCase()}{`)`}
      </div>
      <div className="card-text">
        {`Voto:`}
        {item.vote_average}
      </div>
    </div>
  )
}

export default List
