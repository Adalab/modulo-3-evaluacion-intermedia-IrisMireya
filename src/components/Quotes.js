import React from "react";

const Quotes = ({ quotes }) => {
  if (quotes.length === 0) {
    return <div>Loading quotes</div>;
  }

  const htmlData = quotes.map((quote, i) => {
    return (
      <li className="quote__item" key={i}>
        <p className="quote__quote">
          <label className="quote__label">Frase</label>
          {quote.quote} 
        </p>
        <p className="quote__character">
          <label className="quote__label">Personaje</label>
         {quote.character}
        </p>
      </li>
    );
  });

  return (
    <div>
      <ul className="quotes__list">{htmlData}</ul>
    </div>
  );
};

export default Quotes;
