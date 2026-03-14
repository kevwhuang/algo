// 1535 - Find the Winner of an Array Game

function getWinner(arr, k) {
    let winner = arr[0], wins = 0, i = 0;
    while (wins < k && ++i < arr.length) {
        if (arr[i] < winner) wins++;
        else {
            winner = arr[i];
            wins = 1;
        }
    }
    return winner;
}
