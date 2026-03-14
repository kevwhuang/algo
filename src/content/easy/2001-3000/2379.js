// 2379 - Minimum Recolors to Get K Consecutive Black Blocks

function minimumRecolors(blocks, k) {
    const freqs = { W: 0, B: 0 };
    for (let i = 0; i < k; i++) {
        freqs[blocks[i]]++;
    }
    let min = freqs.W;
    for (let i = 1; i <= blocks.length - k; i++) {
        freqs[blocks[i - 1]]--;
        freqs[blocks[i + k - 1]]++;
        min = Math.min(freqs.W, min);
    }
    return min;
}
