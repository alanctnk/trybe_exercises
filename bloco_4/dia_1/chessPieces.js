let a = "BISHop"

let b = a.toLowerCase()

switch(b) {
    case "pawn":
        console.log("Apenas avança uma casa")
        break;

    case "bishop":
        console.log("Movimento nas diagonais")
        break;

    case "knight":
        console.log("Movimento em L")
        break;

    case "rook":
        console.
        log("Movimento ou na sua vertical ou horizontal")
        break;

    case "queen":
        console.log("Movimento ou na sua vertical, horizontal ou diagonal")
        break;
    
    case "king":
        console.log("Movimento de uma casa para qualquer direção")

    default:
        console.log("Error: Invalid Piece")
}