import React from "react";
import '../styles/App.scss';
import Header from "../components/Header";
import Searchbar from "./Searchbar";
import Quotes from "./Quotes";
import { getQuote } from "./Api";
import AddQuote from "./Addquote";

const {useState, useEffect} = React;

export default function App() {

const[quotes, setQuotes] = useState ([]);

const fetchQuotes = async () => {
    return await getQuote();
}

useEffect(() => {
  fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json")
    .then((response) => response.json())
    .then((quotes) => setQuotes (quotes));
}, []);

  return (
  <div>
    <Header/>
    <div className="App">
      <Searchbar/>
      <Quotes quotes = {quotes}/>
      <AddQuote quotes = {quotes} setQuotes = {setQuotes}/>
    </div>
  </div>
  );
}