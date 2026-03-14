// 1481 - Least Number of Unique Integers After K Removals

function findLeastNumOfUniqueInts(arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
    const freqs = [...map.values()];
    freqs.sort((a, b) => a - b);
    for (let i = 0; i < freqs.length; i++) {
        k -= freqs[i];
        if (k < 0) return freqs.length - i;
        else if (k === 0) return freqs.length - i - 1;
    }
}
