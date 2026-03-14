// 1395 - Count Number of Teams

function numTeams(rating) {
    let teams = 0;
    const n = rating.length;
    for (let i = 0; i < n; i++) {
        const cur = rating[i];
        let left1 = 0, left2 = 0;
        for (let j = 0; j < i; j++) {
            rating[j] < cur ? left1++ : left2++;
        }
        let right1 = 0, right2 = 0;
        for (let j = i + 1; j < n; j++) {
            rating[j] > cur ? right1++ : right2++;
        }
        teams += left1 * right1 + left2 * right2;
    }
    return teams;
}
