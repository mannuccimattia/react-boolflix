import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import ListItem from "./ListItem"

const List = ({ searchType }) => {
  const list = useContext(ListContext);

  return (
    <>
      {list.map(item => (
        <ListItem
          key={item.id}
          item={item}
          searchType={searchType}
        />
      ))}
    </>
  )
}

export default List
