import React from "react";
import "../styles/App.scss";
import Header from "../components/Header";
import Searchbar from "./Searchbar";
import Quotes from "./Quotes";
import { getQuote } from "../services/Api";
import AddQuote from "./Addquote";

const { useState, useEffect } = React;

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [filterQuotes, setfilterQuotes] = useState([]);
  useEffect(() => {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json"
    )
      .then((response) => response.json())
      .then((quotes) => {
        setQuotes(quotes);
         setfilterQuotes(quotes);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <Searchbar quotes={quotes} filterQuotes= {filterQuotes} setfilterQuotes={setfilterQuotes} />
        <Quotes quotes={filterQuotes} />
        <AddQuote quotes={filterQuotes} setQuotes={setQuotes} />
      </div>
    </div>
  );
}
