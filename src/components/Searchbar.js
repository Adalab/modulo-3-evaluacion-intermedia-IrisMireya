import React from "react";
import "../styles/layout/_searchbar.scss";



const Searchbar = ({quotes, filterQuotes, setfilterQuotes}) => {
  
  const filterQuote = (ev) => {

  };
  const filterCharacter = (ev) => {
    if (ev.target.value === "all") {
      return setfilterQuotes(quotes);
    }
    setfilterQuotes(filterQuotes.filter( (quote) => {
      return quote.character === ev.target.value
    }
    ));
  }

  const characters = quotes.map ((quote) => {
    return quote.character;
  });
  const uniq = [...new Set(characters)].sort((a, b) =>
  a > b ? 1 : a < b ? -1 : 0
);
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
        <select
          className="filter2__input"
          onChange={filterCharacter}
          id="filter_character"
        > <option className="filter2" value="all">All</option>
        {uniq.map((character, index) => {
          return (
            <option value={character} key={index}>
              {character}
            </option>
          );
        })}
        </select>
      </div>
    </form>
  );
};

export default Searchbar;
