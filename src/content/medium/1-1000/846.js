// 846 - Hand of Straights

function isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize) return false;
    hand = new Uint32Array(hand).sort();
    const B = new Map();
    hand.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    for (let i = 0; i < hand.length; i++) {
        const cur = hand[i], d = B.get(cur);
        if (d === 0) continue;
        for (let j = 0; j < groupSize; j++) {
            if (!B.get(cur + j)) return false;
            B.set(cur + j, B.get(cur + j) - d);
        }
    }
    return true;
}
