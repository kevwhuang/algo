// 1151 - Minimum Swaps to Group All 1's Together

function minSwaps(data) {
    const ones = data.reduce((s, e) => s + e);
    let window = 0;
    for (let i = 0; i < ones; i++) {
        if (data[i] === 0) window++;
    }
    let swaps = window;
    for (let i = ones; i < data.length; i++) {
        if (data[i] === 0) window++;
        if (data[i - ones] === 0) window--;
        swaps = Math.min(window, swaps);
    }
    return swaps;
}
