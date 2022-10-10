import './App.css';
import React, {useState} from 'react';
import Laskuri from './Laskuri';
import Viesti from './Viesti';

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)

const huomio = () => {
  alert("Huomio!")
}

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {showLaskuri && <Laskuri huomio = {huomio}/>}
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti = "Tervehdys app komponentista! " />
    
    </div>
  );
}

export default App;
