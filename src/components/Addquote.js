import React from "react";

const addQuote = ({quotes, setQuotes}) => {
    const addNewQuote = (ev)=> {
      ev.preventDefault();
        const newQuote={
            quote:"",
            character:""
        }
        setQuotes([...quotes, newQuote]);
    }
    return (
      <form>
          <h1>Añadir una nueva frase</h1>
        <div>
          <label htmlFor="quote">Frase</label>
          <input
            className="filter1__input"
            type="text"
            id="quote"
            
          />
        </div>
        <div>
          <label htmlFor="character">Personaje</label>
          <input
            className="filter2__input"
            type="text"
            id="character"
          />
        </div>
        <button onClick = {addNewQuote} >Añadir una nueva frase</button>
      </form>
    );
  };

  export default addQuote;