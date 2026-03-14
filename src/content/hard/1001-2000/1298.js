// 1298 - Maximum Candies You Can Get From Boxes

function maxCandies(status, candies, keys, containedBoxes, initialBoxes) {
    let res = 0, Q = [], arr = [];
    initialBoxes.forEach(e => (status[e] ? Q : arr).push(e));
    while (Q.length) {
        for (let i = 0; i < Q.length; i++) {
            res += candies[Q[i]];
            keys[Q[i]].forEach(e => status[e] = true);
            containedBoxes[Q[i]].forEach(e => arr.push(e));
        }
        const N1 = [], N2 = [];
        arr.forEach(e => (status[e] ? N1 : N2).push(e));
        Q = N1, arr = N2;
    }
    return res;
}
