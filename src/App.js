import React, { useState } from 'react';
import './style.css';
import Die from "./components/Die"


function App() {

  function allNewDice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  const [loadDice, setLoadDice] = useState(allNewDice())

  const allDice = loadDice.map((dice, index) => {
    return (
      <Die
        key = {index}
        value = {dice}
      />
    )
  })

  function rollNewSet(){
    setLoadDice(allNewDice())
  }

  return (
    <main className="app">
      <div className="dice-container">
        {allDice}
      </div>
      <button className = "roll-button" onClick = {rollNewSet}>Roll</button>
    </main>
  );
}

export default App; 
