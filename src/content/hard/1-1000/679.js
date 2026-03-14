// 679 - 24 Game

function judgePoint24(cards) {
    const n = cards.length;
    if (n === 1) return Math.abs(cards[0] - 24) < .1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const next = new Array(n - 1);
            for (let idx = 0, k = 0; k < n; k++) {
                if (i === k || j === k) continue;
                next[idx++] = cards[k];
            }
            const a = cards[i], b = cards[j];
            const arr = [a + b, a - b, b - a, a * b, a / b, b / a];
            for (let i = 0; i < 6; i++) {
                if (arr[i] === 0) continue;
                next[n - 2] = arr[i];
                if (judgePoint24(next)) return true;
            }
        }
    }
    return false;
}
