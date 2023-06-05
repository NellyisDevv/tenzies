import React, { useState, useEffect } from 'react'
import Die from './components/Die.jsx'
import HeaderContent from './components/HeaderContent.jsx'
import RollBtn from './components/RollBtn.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
      setTenzies(true)
      new Audio('/public/sound/winner.mp3').play()
    }
  }, [dice])

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }
  }

  function allNewDice() {
    const rollDice = []
    for (let i = 0; i < 10; i++) {
      // rollDice.push(Math.ceil(Math.random() * 6))
      rollDice.push(generateNewDie())
    }
    return rollDice
  }

  function rollNewDice() {
    setDice(prevState =>
      prevState.map(die => (die.isHeld ? die : generateNewDie()))
    )
  }

  function holdDice(id, url) {
    setDice(prevState =>
      prevState.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    )
    new Audio(url).play()
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const fullWindow = getWindowDimensions()

  function refreshPage() {
    window.location.reload(false)
  }

  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id, '/public/sound/green.mp3')}
    />
  ))

  return (
    <main className='bg-[#F5F5F5] text-[#2B283A] p-6 text-5xl  flex flex-col justify-center items-center font-bold w-[95%] h-[420px] sm:h-[700px] max-w-[700px] rounded-2xl font-karla gap-[30px]'>
      <HeaderContent />
      <div className='dice-container sm:gap-[20px]'>{diceElements}</div>
      <RollBtn
        refreshPage={refreshPage}
        tenzies={tenzies}
        rollNewDice={rollNewDice}
      />
      {tenzies && (
        <Confetti width={fullWindow.width} height={fullWindow.height} />
      )}
    </main>
  )
}

export default App
