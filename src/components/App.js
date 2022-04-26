import React from "react";
import '../styles/App.scss';
import Searchbar from "./Searchbar";
import Quotes from "./Quotes";
import { getQuotes } from "./Api";


function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Quotes/>
    </div>
  );
}

export default App;
