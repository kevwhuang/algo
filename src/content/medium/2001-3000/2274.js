// 2274 - Maximum Consecutive Floors Without Special Floors

function maxConsecutive(bottom, top, special) {
    special.sort((a, b) => a - b);
    let max = Math.max(0, special[0] - bottom, top - special.at(-1));
    for (let i = 1; i < special.length; i++) {
        max = Math.max(special[i] - special[i - 1] - 1, max);
    }
    return max;
}
