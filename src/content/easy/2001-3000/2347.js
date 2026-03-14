// 2347 - Best Poker Hand

function bestHand(ranks, suits) {
    if (new Set(suits).size === 1) return 'Flush';
    const map = new Map();
    for (let i = 0; i < 5; i++) {
        const freq = (map.get(ranks[i]) ?? 0) + 1;
        map.set(ranks[i], freq > 3 ? 3 : freq);
    }
    const freqs = [...map.values()];
    if (freqs.includes(3)) return 'Three of a Kind';
    if (freqs.includes(2)) return 'Pair';
    return 'High Card';
}
