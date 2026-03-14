// 2511 - Maximum Enemy Forts That Can Be Captured

function captureForts(forts) {
    let captures = 0;
    for (let i = 0, prev; i < forts.length; i++) {
        if (forts[i] === 0) continue;
        if (forts[prev] && forts[i] !== forts[prev]) {
            captures = Math.max(i - prev - 1, captures);
        }
        prev = i;
    }
    return captures;
}
