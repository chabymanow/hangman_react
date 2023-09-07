import { useCallback, useEffect, useState } from 'react'
import WordList from './wordList.json';
import { HangmanDraw } from './HangmanDraw';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function getNewWord(){
  return WordList[Math.floor(Math.random() * WordList.length)]
}

function drawText(text: string){
  return (<div>You {text}!<br />Press enter or refresh page<br />for new game</div>)
}

function App() {
  const [secretText, setSecretText] = useState(getNewWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !secretText.includes(letter)
  )

  const isLoser = incorrectLetters.length > 6
  const isWinner = secretText.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(currentLetter => [...currentLetter, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect (() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault;
      addGuessedLetters(key);
    }

    document.addEventListener("keypress", handler);
    return ()=>{
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(key !== "Enter") return

      e.preventDefault;
      setGuessedLetters([])
      setSecretText(getNewWord())
    }

    document.addEventListener("keypress", handler);
    return ()=>{
      document.removeEventListener("keypress", handler);
    }
  }, [])

  return (
    <div style={{
      width: "90%",
      maxWidth: "500px",
      paddingTop: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      margin: "0 auto",
      alignItems: "center"
    }}>
      
      <HangmanDraw numberOfGuess = {incorrectLetters.length}/>
      <HangmanWord guessedLetters = {guessedLetters} wordToGuess = {secretText} reveal = {isLoser} />
      <div style={{ fontSize: "25px", textAlign: "center" }}>
        {isWinner && drawText("win")}
        {isLoser && drawText("lost")}
      </div>
      <div style={{ alignSelf: "stretch" }}> 
      <Keyboard 
        activeLetter = {guessedLetters.filter(letter => secretText.includes(letter))}  
        inactiveLetters = {incorrectLetters} 
        addGuessedLetter = {addGuessedLetters}
        disabled = {isLoser || isWinner}
      />
      </div>
    </div>
  )
}

export default App
