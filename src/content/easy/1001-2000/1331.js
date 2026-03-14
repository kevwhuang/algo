// 1331 - Rank Transform of an Array

function arrayRankTransform(arr) {
    const order = [...new Set(arr)].sort((a, b) => a - b);
    const ranks = new Map();
    for (let i = 0; i < order.length; i++) {
        ranks.set(order[i], i + 1);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ranks.get(arr[i]);
    }
    return arr;
}
