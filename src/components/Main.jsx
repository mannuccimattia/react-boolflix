import List from "./List";
import { useContext } from "react";
import ListContext from "../contexts/ListContext";

const Main = () => {
  const list = useContext(ListContext);

  return (
    <>
      <div className="container" id="main-container">
        {!list ? (
          <div className="row">
            <div className="col-12 text-center text-secondary">
              <i className="fa-solid fa-face-sad-tear display-1 my-3"></i>
              <h4>Niente da mostrare</h4>
              <span>Cerca qualcosa...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            <List />
          </div>
        )}
      </div>
    </>
  )
}

export default Main
