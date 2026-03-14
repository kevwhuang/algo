// 2260 - Minimum Consecutive Cards to Pick Up

function minimumCardPickup(cards) {
    let min = Infinity;
    const map = new Map();
    for (let i = 0; i < cards.length; i++) {
        if (map.has(cards[i])) {
            min = Math.min(i - map.get(cards[i]), min);
        }
        map.set(cards[i], i);
    }
    return min === Infinity ? -1 : min + 1;
}
