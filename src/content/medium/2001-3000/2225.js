// 2225 - Find Players With Zero or One Losses

function findWinners(matches) {
    const players = {};
    for (let i = 0; i < matches.length; i++) {
        const [id1, id2] = matches[i];
        if (!(id1 in players)) players[id1] = 0;
        if (!(id2 in players)) players[id2] = 0;
        players[id2]++;
    }
    const res = [[], []];
    for (const id in players) {
        if (players[id] === 0) res[0].push(Number(id));
        else if (players[id] === 1) res[1].push(Number(id));
    }
    return res;
}
