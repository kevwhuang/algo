// 2660 - Determine the Winner of a Bowling Game

function isWinner(player1, player2) {
    function calcScore(arr) {
        let score = 0;
        for (let i = 0; i < arr.length; i++) {
            score += arr[i];
            if (arr[i - 1] === 10 || arr[i - 2] === 10) score += arr[i];
        }
        return score;
    }
    const score1 = calcScore(player1);
    const score2 = calcScore(player2);
    return score1 === score2 ? 0 : score1 > score2 ? 1 : 2;
}
