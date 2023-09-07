import styles from "./Keyboard.module.css"

type keyboardProps = {
    disabled: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export function Keyboard( {activeLetter, inactiveLetters, addGuessedLetter, disabled = false}: keyboardProps ){
    return <div style={{ width: "95%", margin: "0 auto", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "3px"}}>
        {keys.map(key => {
            const isActive = activeLetter.includes(key)
            const isInactive = inactiveLetters.includes(key)

            return <button 
                onClick={() => addGuessedLetter(key)}
                className={`${styles.keyButton} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`}
                key= {key}
                disabled = {isActive || isInactive || disabled}
                >{key}
                
                </button>
        })}
    </div>
}