// 1629 - Slowest Key

function slowestKey(releaseTimes, keysPressed) {
    let res = keysPressed[0], max = releaseTimes[0], i = 0;
    while (++i < releaseTimes.length) {
        const d = releaseTimes[i] - releaseTimes[i - 1];
        if (d < max) continue;
        if (d > max) max = d, res = keysPressed[i];
        if (d > max) continue;
        if (keysPressed[i] > res) res = keysPressed[i];
    }
    return res;
}
