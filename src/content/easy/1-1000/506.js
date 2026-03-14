// 506 - Relative Ranks

function findRelativeRanks(score) {
    const arr = new Array(score.length);
    for (let i = 0; i < score.length; i++) {
        arr[i] = [i, score[i]];
    }
    arr.sort((a, b) => b[1] - a[1]);
    arr[0] && (score[arr[0][0]] = 'Gold Medal');
    arr[1] && (score[arr[1][0]] = 'Silver Medal');
    arr[2] && (score[arr[2][0]] = 'Bronze Medal');
    for (let i = 3; i < arr.length; i++) {
        score[arr[i][0]] = String(i + 1);
    }
    return score;
}
