import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./Components/CharacterList";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { colors } from "@material-ui/core";

const BASE_URL = "https://www.anapioficeandfire.com/api";

function App() {
  const [character, setCharacter] = useState([]);
  // const [query, setQuery] = useState("Hodor");
  //console.log(query);

  useEffect(() => {
    async function getData() {
      // const params = {
      //   //page: 1,
      //   // pageSize: 20,
      // };
      const response = await axios.get(`${BASE_URL}/characters`);
      setCharacter(response.data);
    }
    getData();
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/Characters"
          render={() => (
            <header className="App-header">
              {/* {/* <input onChange={(event) => setQuery(event.target.value)} />
        <button onClick={() => setToggle(!toggle)}>Search</button>
        <p>{query}</p> */}
              <div>
                {character.map((character, key) => {
                  return (
                    <CharacterList character={character} key={key}>
                      {/* //     <h1>{show.name}</h1>
            //     <h3>{show.url}</h3>
            //     <h3>{show.language}</h3> */}
                    </CharacterList>
                  );
                })}
              </div>
            </header>
          )}
        ></Route>
        <Link
          to="/Characters"
          style={{ fontSize: "xxx-large", color: "white" }}
        >
          Learn More
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;

//{show &&
//show.map(show => {
//return (
