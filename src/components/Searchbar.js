import React from "react";

const filterQuote = (ev) => {};
const filterCharacter = (ev) => {}

const Searchbar = ({quotes}) => {
  return (
    <div>
        <h1>Frases de Friends</h1>
      <div>
        <span>Filtrar por frase</span>
        <input
          className="filter1__input"
          type="text"
          onChange={filterQuote}
          value={1}
        />
      </div>
      <div>
        <span>Filtrar por personaje</span>
        <input
          className="filter2__input"
          type="text"
          onChange={filterCharacter}
          value={1}
        />
      </div>
    </div>
  );
};

export default Searchbar;
