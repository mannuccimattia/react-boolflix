import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import ListItem from "./ListItem"
import SearchTypeContext from "../contexts/SearchTypeContext";

const List = () => {
  const list = useContext(ListContext);
  const { genreFilter } = useContext(SearchTypeContext);

  const filteredList = genreFilter
    ? (
      list.filter(item => item.genre_ids?.includes(parseInt(genreFilter)))
    )
    : list;

  return (
    <>
      {filteredList.map(item => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
    </>
  )
}

export default List
