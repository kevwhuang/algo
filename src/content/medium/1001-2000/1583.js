// 1583 - Count Unhappy Friends

function unhappyFriends(n, preferences, pairs) {
    const mapper = () => new Uint16Array(n).fill(n);
    const rank = Array.from({ length: n }, mapper);
    const nn = n - 1;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < nn; y++) {
            rank[x][preferences[x][y]] = y;
        }
    }
    const match = new Uint16Array(n);
    for (let i = 0; i < pairs.length; i++) {
        match[pairs[i][0]] = pairs[i][1];
        match[pairs[i][1]] = pairs[i][0];
    }
    let unhappy = 0;
    for (let x = 0; x < n; x++) {
        const y = match[x];
        for (let u = 0; u < n; u++) {
            if (rank[x][u] >= rank[x][y]) continue;
            const v = match[u];
            if (rank[u][x] >= rank[u][v]) continue;
            unhappy++;
            break;
        }
    }
    return unhappy;
}
