// 1989 - Maximum Number of People That Can Be Caught in Tag

function catchMaximumAmountofPeople(team, dist) {
    let people = 0;
    L: for (let i = 0, leftBound = 0; i < team.length; i++) {
        if (team[i] !== 1) continue;
        const start = Math.max(leftBound, i - dist);
        const rightBound = Math.min(i + dist, team.length - 1);
        for (let j = start; j <= rightBound; j++) {
            if (team[j] !== 0) continue;
            people++;
            leftBound = j + 1;
            continue L;
        }
        leftBound = rightBound + 1;
    }
    return people;
}
