// 1899 - Merge Triplets to Form Target Triplet

function mergeTriplets(triplets, target) {
    const M = triplets, aa = target[0], bb = target[1], cc = target[2];
    for (let mask, i = 0; i < M.length; i++) {
        const a = M[i][0], b = M[i][1], c = M[i][2];
        if (a > aa || b > bb || c > cc) continue;
        if (a === aa) mask |= 1;
        if (b === bb) mask |= 2;
        if (c === cc) mask |= 4;
        if (mask === 7) return true;
    }
    return false;
}
