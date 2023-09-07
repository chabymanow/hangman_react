type guesLetters = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
export function HangmanWord({guessedLetters, wordToGuess, reveal = false}: guesLetters){
    return <div style={{ display: "flex", gap: "20px", fontSize: "3rem", fontWeight: "600", textTransform: "uppercase", fontFamily: "monospace" }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: "5px solid #101010"}} key={index}>
                <span style={{ 
                    visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                    color: !guessedLetters.includes(letter) && reveal ? "#FF0000" : "#101010"}}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}