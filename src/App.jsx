import { useEffect, useState } from "react";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setcharacterList] = useState([]);
  const [firstResponse, setfirstResponse] = useState({});
  const [currentPage, setcurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => {
        setfirstResponse(response.info);
        setcharacterList(response.results);
      })
      .catch((erro) => console.log(erro));
  }, [currentPage]);

  const previusPage = () => {
    firstResponse.prev && setcurrentPage(firstResponse.prev);
  };

  const nextPage = () => {
    setcurrentPage(firstResponse.next);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Characters
          nextPage={nextPage}
          previusPage={previusPage}
          characterList={characterList}
        ></Characters>
      </div>
    </div>
  );
}

export default App;
