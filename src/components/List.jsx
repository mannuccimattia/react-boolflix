import { useContext } from "react";
import ListContext from "../contexts/ListContext";
import ListItem from "./ListItem"

const List = () => {
  const list = useContext(ListContext);

  return (
    <>
      {list.map(item => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
    </>
  )
}

export default List
