// 969 - Pancake Sorting

function pancakeSort(arr) {
    function reverse(l, r) {
        while (l < r) {
            const swap = arr[l];
            arr[l++] = arr[r];
            arr[r--] = swap;
        }
    }
    const res = [];
    let k = arr.length;
    while (k--) {
        let maxIndex = 0;
        for (let i = 1; i <= k; i++) {
            if (arr[i] > arr[maxIndex]) maxIndex = i;
        }
        if (maxIndex === k) continue;
        reverse(0, maxIndex);
        res.push(maxIndex + 1);
        reverse(0, k);
        res.push(k + 1);
    }
    return res;
}
