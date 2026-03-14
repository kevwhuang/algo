// 950 - Reveal Cards in Increasing Order

function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);
    const res = [];
    while (true) {
        res.unshift(deck.pop());
        if (deck.length === 0) break;
        res.unshift(res.pop());
    }
    return res;
}
