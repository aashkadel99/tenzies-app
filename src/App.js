import React, { useState } from 'react';
import './style.css';
import Die from "./components/Die"


function App() {

  function allNewDice(){
    
    let diceObjectContainer = []
    let newDice = {value: 0, isHeld: false}

    for(let i = 0; i < 10; i++){
        diceObjectContainer.push(
          newDice = {
            ...newDice,
            value: Math.ceil(Math.random() * 6)

          }
        )
      }
    return diceObjectContainer
  }

  const [loadDice, setLoadDice] = useState(allNewDice())

  const allDice = loadDice.map((dice, index) => {
    return (
      <Die
        key = {index}
        value = {dice.value}
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
