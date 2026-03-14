// 1247 - Minimum Swaps to Make Strings Equal

function minimumSwap(s1, s2) {
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) continue;
        s1[i] === 'x' ? counts[0]++ : counts[1]++;
        s2[i] === 'x' ? counts[2]++ : counts[3]++;
    }
    let swaps = 0;
    const ops1 = Math.min(~~(counts[0] / 2), ~~(counts[3] / 2));
    counts[0] -= 2 * ops1;
    counts[3] -= 2 * ops1;
    swaps += ops1;
    const ops2 = Math.min(~~(counts[1] / 2), ~~(counts[2] / 2));
    counts[1] -= 2 * ops2;
    counts[2] -= 2 * ops2;
    swaps += ops2;
    if (counts.every(e => e === 0)) return swaps;
    if (counts.every(e => e === 1)) return swaps + 2;
    return -1;
}
