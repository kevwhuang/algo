// 1908 - Game of Nim

function nimGame(piles) {
    return Boolean(piles.reduce((s, e) => s ^ e));
}
