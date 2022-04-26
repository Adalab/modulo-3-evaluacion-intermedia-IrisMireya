export const searchQuote = async (quote) => {
    try {
      let url = `https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getQuote = async () => {
    try {
      let url = `https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };