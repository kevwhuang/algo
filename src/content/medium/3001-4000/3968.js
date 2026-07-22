// 3968. Maximum Manhattan Distance After All Moves

function maxDistance(moves) {
    let acc1 = 0, acc2 = 0, acc3 = 0;
    for (let i = 0; i < moves.length; i++) {
        const s = moves[i];
        if (s === 'U') acc1++;
        else if (s === 'D') acc1--;
        else if (s === 'L') acc2++;
        else if (s === 'R') acc2--;
        else acc3++;
    }
    return Math.abs(acc1) + Math.abs(acc2) + acc3;
}
