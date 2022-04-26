import React from "react";

const addQuote = ({quotes, setQuotes}) => {
    const addNewQuote = (ev)=> {
        const newQuote={
            quote:"",
            character:""
        }
        setQuotes([...quotes, newQuote]);
    }
    return (
      <div>
          <h1>Añadir una nueva frase</h1>
        <div>
          <span>Frase</span>
          <input readOnly
            className="filter1__input"
            type="text"
            value= ""
          />
        </div>
        <div>
          <span>Personaje</span>
          <input readOnly
            className="filter2__input"
            type="text"
            value= ""
          />
        </div>
        <button onClick = {addNewQuote} >Añadir una nueva frase</button>
      </div>
    );
  };

  export default addQuote;