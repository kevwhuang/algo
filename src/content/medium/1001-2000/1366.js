// 1366 - Rank Teams by Votes

function rankTeams(votes) {
    function comparator(a, b) {
        for (let i = 0; i < len; i++) {
            if (obj[a][i] > obj[b][i]) return -1;
            if (obj[a][i] < obj[b][i]) return 1;
        }
        return a < b ? -1 : 1;
    }
    const len = votes[0].length;
    const obj = {};
    for (let i = 0; i < len; i++) {
        obj[votes[0][i]] = new Array(len).fill(0);
    }
    for (let i = 0; i < votes.length; i++) {
        for (let j = 0; j < len; j++) {
            obj[votes[i][j]][j]++;
        }
    }
    return votes[0]
        .split('')
        .sort((a, b) => comparator(a, b))
        .join('');
}
