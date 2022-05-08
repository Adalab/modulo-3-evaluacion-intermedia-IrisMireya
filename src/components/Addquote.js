import React from "react";
import "../styles/layout/_addquote.scss";

const { useState } = React;

const AddQuote = ({ quotes, setQuotes }) => {
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");

  const handleQuote = (ev) => {
    setQuote(ev.target.value);
  };
  const handleCharacter = (ev) => {
    setCharacter(ev.target.value);
  };
  const addNewQuote = (ev) => {
    ev.preventDefault();
    const newQuote = {
      quote: quote,
      character: character,
    };
    setQuotes([...quotes, newQuote]);
  };
  return (
    <form>
      <h1>Añadir una nueva frase</h1>
      <div className="inputs">
        <label htmlFor="quote">Frase: </label>
        <input
          className="filter1__input"
          type="text"
          id="quote"
          onChange={handleQuote}
          value={quote}
        />
        <label htmlFor="character" className="character">
          Personaje:{" "}
        </label>
        <input
          className="filter2__input"
          type="text"
          id="character"
          onChange={handleCharacter}
          value={character}
        />
      </div>

      <button onClick={addNewQuote} className="btn">
        Añadir una nueva frase
      </button>
    </form>
  );
};

export default AddQuote;
