// Scripts will run only after DOM is loaded
// eslint-disable-next-line no-unused-vars
window.addEventListener('DOMContentLoaded', (_event) => {
  const getNewQuote = () => {
    // get quote and source elements
    const quote = document.getElementById('quote');
    const source = document.getElementById('source');

    // Using Fetch API to retrive text file on server
    fetch('Quotes.json')
      .then((response) => response.json())
      .then((data) => {
        // choose a number between 1 and the number of quotes
        const rnd = Math.floor(Math.random() * data.length);

        // write text into element
        quote.innerHTML = data[rnd].quote;
        source.innerHTML = `&mdash; ${data[rnd].source}`;
      });
  };

  const addNewQuote = () => {
    // alert('Add new quote btn!');
  };

  // get elements
  const newQuoteBtn = document.getElementById('newq');
  const addQuoteBtn = document.getElementById('addq');

  // when clicked trigger function
  newQuoteBtn.addEventListener('click', getNewQuote, false);
  addQuoteBtn.addEventListener('click', addNewQuote, false);

  // Once window loads show random quote
  window.onload = getNewQuote;
});
