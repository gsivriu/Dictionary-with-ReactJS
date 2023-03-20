import React, { useState } from "react";
import "./App.css";
import InsertWord from "./InsertWord";
import CheckWord from "./CheckWord";

const App = () => {
  const [words, setWords] = useState([]);

  return (
    <div>
      <h1>Dictionary</h1>
      <InsertWord words={words} setWords={setWords} />
      <br></br>
      <CheckWord words={words} />
    </div>
  );
};
export default App;
