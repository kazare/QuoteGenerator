import './App.css';
import { useState, useEffect } from 'react';
import quotes from './quotes.js';

function App() {
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState('');

  const getNewQuote = () => {
    const rnd = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[rnd].quote);
    setSource(`${quotes[rnd].source}`);
  }


  useEffect(() => {
    getNewQuote();
  }, []);

  const addNewQuote = () => {
    // alert('Add new quote btn!');
  };


  return (
    <div className="App">
      <div id="flex-container">

        <q id="quote" className="flex-item">{quote}</q>
        <cite id="source" className="flex-item">&mdash; {source}</cite>
        <button id="newq" className="flex-item" onClick={getNewQuote}>New Quote</button>
        <button id="addq" className="flex-item">Add new quote</button>

      </div>
      <div id="img-src">Photo by <a href="https://www.pexels.com/@jplenio?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Johannes Plenio</a> from <a href="https://www.pexels.com/photo/forest-covered-in-white-fog-1423600/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Pexels</a></div>
    </div>
  );
}

export default App;
