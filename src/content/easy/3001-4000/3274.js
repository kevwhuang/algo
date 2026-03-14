// 3274 - Check If Two Chessboard Squares Have the Same Color

function checkTwoChessboards(coordinate1, coordinate2) {
    const a = (coordinate1.charCodeAt() + Number(coordinate1[1])) % 2;
    const b = (coordinate2.charCodeAt() + Number(coordinate2[1])) % 2;
    return a === b;
}
