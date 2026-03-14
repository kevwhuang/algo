// 1471 - The K Strongest Values in an Array

function getStrongest(arr, k) {
    arr.sort((a, b) => a - b);
    const m = arr[~~((arr.length - 1) / 2)];
    const res = new Array(k);
    for (let i = 0, l = 0, r = arr.length - 1; i < k; i++) {
        const strength1 = Math.abs(arr[l] - m);
        const strength2 = Math.abs(arr[r] - m);
        if (strength1 > strength2) res[i] = arr[l++];
        else if (strength1 === strength2 && l > r) res[i] = arr[l++];
        else res[i] = arr[r--];
    }
    return res;
}
