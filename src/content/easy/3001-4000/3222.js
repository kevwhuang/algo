// 3222 - Find the Winning Player in Coin Game

function losingPlayer(x, y) {
    let winner = true;
    while (x && y >= 4) winner = !winner, x--, y -= 4;
    return winner ? 'Bob' : 'Alice';
}
