import './App.css';
import React, {useState} from 'react';
import Laskuri from './Laskuri';
import Viesti from './Viesti';
import Posts from './Posts';
import CustomerList from './CustomerList';
import Message from './Message'

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)
const [showPosts, setShowPosts] = useState(false)
const [isPositive, setIsPositive] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')

const huomio = () => {
  alert("Huomio!")
}

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {showMessage && <Message message={message} isPositive={isPositive} /> }

      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />

      {showLaskuri && <Laskuri huomio = {huomio}/>}
      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota Postit</button>}
      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Näytä Postit</button>}
      {showPosts && <Posts huomio = {huomio}/>}

      <Viesti teksti = "Tervehdys app komponentista! " />
    
    </div>
  );
}

export default App;
