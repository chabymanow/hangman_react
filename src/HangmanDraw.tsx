const head = (
    <div style={{ width: "50px", height: "50px", borderRadius: "100%", border: "10px solid #101010", position: "absolute", top: "50px", right: "-30px" }} />
)

const body = (
    <div style={{ width: "10px", height: "80px", background: "#101010", position: "absolute", top: "120px", right: "0" }} />
)

const Rarm = (
    <div style={{ width: "80px", height: "10px", background: "#101010", position: "absolute", top: "150px", right: "-80px", transformOrigin: "left bottom", rotate: "-30deg" }} />
)

const Larm = (
    <div style={{ width: "80px", height: "10px", background: "#101010", position: "absolute", top: "150px", right: "8px", transformOrigin: "right bottom", rotate: "30deg" }} />
)

const Rleg = (
    <div style={{ width: "10px", height: "80px", background: "#101010", position: "absolute", top: "110px", right: "-10px", transformOrigin: "left bottom", rotate: "150deg" }} />
)

const Lleg = (
    <div style={{ width: "10px", height: "80px", background: "#101010", position: "absolute", top: "110px", right: "10px", transformOrigin: "right bottom", rotate: "-150deg" }} />
)

const bodyParts = [head, body, Rarm, Larm, Rleg, Lleg];

type HangmanDrawProps = {
    numberOfGuess: number;
}

export function HangmanDraw({numberOfGuess}: HangmanDrawProps){
    return (
    <div style={{ position: "relative" }}>
        {bodyParts.slice(0, numberOfGuess)}
        <div style={{ height: "50px", width: "10px", background: "#101010", position: "absolute", top: "0", right: "0" }} />
        <div style={{ height: "50px", width: "10px", background: "#101010", position: "absolute", top: "0px", left: "120px", transformOrigin: "center center", rotate: "45deg" }} />
        <div style={{ height: "10px", width: "140px", background: "#101010", marginLeft: "100px" }} />
        <div style={{ height: "300px", width: "10px", background: "#101010", marginLeft: "100px" }} />
        <div style={{ height: "10px", width: "200px", background: "#101010" }} />
    </div>
    )
}