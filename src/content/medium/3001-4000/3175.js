// 3175 - Find the First Player to Win K Games in a Row

function findWinningPlayer(skills, k) {
    let wins = 0, i = 0, j = 1;
    while (wins < k && j < skills.length) {
        if (skills[i] < skills[j]) wins = 1, i = j, j = i + 1;
        else wins++, j++;
    }
    return i;
}
