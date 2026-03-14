// 914 - X of a Kind in a Deck of Cards

function hasGroupsSizeX(deck) {
    const B = new Map();
    deck.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    const min = Math.min(...B.values());
    L: for (let mod = 2; mod <= min; mod++) {
        if (min % mod) continue;
        for (const e of B.values()) {
            if (e % mod) continue L;
        }
        return true;
    }
    return false;
}
