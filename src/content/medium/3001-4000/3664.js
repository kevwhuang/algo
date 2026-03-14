// 3664 - Two-Letter Card Game

function score(cards, x) {
    const B1 = new Uint32Array(10), B2 = new Uint32Array(10);
    let acc1 = 0, acc2 = 0, acc3 = 0, i = -1;
    while (++i < cards.length) {
        const s = cards[i][0], t = cards[i][1];
        if (s === x && t === x) ++acc3;
        else if (s === x) ++B2[t.charCodeAt() - 97] && ++acc2;
        else if (t === x) ++B1[s.charCodeAt() - 97] && ++acc1;
    }
    const a = Math.min(acc1 >> 1, acc1 - Math.max(...B1));
    const b = Math.min(acc2 >> 1, acc2 - Math.max(...B2));
    const c = Math.min(acc1 + acc2 - a - a - b - b, acc3);
    return a + b + c + Math.min(a + b, acc3 - c >> 1);
}
