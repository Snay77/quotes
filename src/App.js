import logo from './logo.svg';
import './App.css';
import Quote from "./Quote/index.js"
import getQuotes from './Data/data.js';
import AllQuotes from './AllQuotes/index.js';

function App() {


  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      <AllQuotes quotes={getQuotes()}/>
    </div>
  );
}

export default App;