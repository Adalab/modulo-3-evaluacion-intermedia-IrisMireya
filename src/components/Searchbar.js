import React from "react";

const filterQuote = (ev) => {};
const filterCharacter = (ev) => {}

const Searchbar = ({quotes}) => {
  return (
    <form>
        <h1>Frases de Friends</h1>
      <div>
        <label htmlFor="filter_quote">Filtrar por frase</label>
        <input
          className="filter1__input"
          type="text"
          onChange={filterQuote}
          id="filter_quote"
        />
      </div>
      <div>
        <label htmlFor="filter_character">Filtrar por personaje</label>
        <input
          className="filter2__input"
          type="text"
          onChange={filterCharacter}
          id="filter_character"
        />
      </div>
    </form>
  );
};

export default Searchbar;
