// 2682 - Find the Losers of the Circular Game

function circularGameLosers(n, k) {
    const set = new Set();
    for (let i = 2; i <= n; i++) {
        set.add(i);
    }
    let i = 1, mult = 1;
    while (true) {
        i = (i + k * mult++) % n;
        if (i === 0) i = n;
        if (!set.has(i)) break;
        set.delete(i);
    }
    return [...set];
}
