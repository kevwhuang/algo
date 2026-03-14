// 2053 - Kth Distinct String in an Array

function kthDistinct(arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    for (const e of map) {
        if (e[1] === 1) k--;
        if (k === 0) return e[0];
    }
    return '';
}
