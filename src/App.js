import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Die from "./components/Die"


function App() {

  const [loadDice, setLoadDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  let buttonText = useRef("Roll")

  useEffect(() => {
    const allHeld = loadDice.every(dice => dice.isHeld)
    const firstValue = loadDice[0]
    const allSameValue = loadDice.every(dice => dice.value === firstValue)

    if (allHeld && firstValue){
      setTenzies(true)
      buttonText.current = "New Game"
    }

  }, [loadDice])


  function allNewDice(){    
    let diceObjectContainer = []
    let newDice = {
      value: 0, 
      isHeld: false
    }

    for(let i = 0; i < 10; i++){
        diceObjectContainer.push(
          newDice = {
            ...newDice,
            value: Math.ceil(Math.random() * 6),
            id: `${i}`
          }
        )
      }
    return diceObjectContainer
  }


  const allDice = loadDice.map((dice) => {
    return (
      <Die
        key = {dice.id}
        id = {dice.id}
        value = {dice.value}
        holdDice = {holdDice}
        isHeld = {dice.isHeld}
      />
    )
  })

  function holdDice(dieId){
    setLoadDice(oldLoadDice => oldLoadDice.map(dice => {
      return (
        dice.id === dieId ? {...dice, isHeld: !dice.isHeld} : dice
      )
    }))
  }

  function rollNewSet(){
    setLoadDice(oldLoadDice => oldLoadDice.map((dice, index) => {
      return (
        dice.isHeld ? 
        dice:
        {
          value: Math.ceil(Math.random() * 6),
          id: `${index}`
        }
      )
    }))
  }

  return (
    <main className="app">
      <div className = "heading">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.
        </p>
      </div>
      <div className="dice-container">
        {allDice}
      </div>
      <button className = "roll-button" onClick = {() => rollNewSet()}>{buttonText.current}</button>
    </main>
  );
}


export default App; 
