import React, { useState } from 'react';
import './App.css';

const Laskuri = (props) => {

const [luku, setLuku] = useState(0)

  return (
      <>
      <h3>{luku}</h3>
      <button onClick={() => setLuku(luku + 1)}>+</button>
      <button onClick={() => setLuku(luku - 1)}>-</button>
      <button onClick={() => setLuku(luku * 0)}>RESET</button>

      <button onClick={props.huomio}>Huomio</button>
      </>    
  );
}

export default Laskuri;