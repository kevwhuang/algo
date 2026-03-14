// 1812 - Determine Color of a Chessboard Square

function squareIsWhite(coordinates) {
    return coordinates.charCodeAt() % 2 !== coordinates.charCodeAt(1) % 2;
}
