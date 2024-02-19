import logo from './logo.svg';
import './App.css';
import Quote from "./Quote/index.js"
import {getQuotes, getNextQuote } from './Data/data.js';
import AllQuotes from './AllQuotes/index.js';
import OneQuote from './OneQuote/index.js';

function App() {
  // console.log(getNextQuote(14))
  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      <OneQuote/>
    </div>
  );
}

export default App;