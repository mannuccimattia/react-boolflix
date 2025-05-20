import React from 'react'

const List = ({ item }) => {
  return (
    <div className="card w-25">
      <div className="card-title">Titolo: {item.title || item.name}</div>
      <div className="card-title">TitoloOriginale: {item.original_title || item.original_name}</div>
      <div className="card-text">
        Lingua:
        <span className={`fi fi-${item.original_language.toLowerCase()}`}></span>({item.original_language.toUpperCase()})
      </div>
      <div className="card-text">Voto: {item.vote_average}</div>
    </div>
  )
}

export default List
