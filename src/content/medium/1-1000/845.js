// 845 - Longest Mountain in Array

function longestMountain(arr) {
    let max = 0;
    const len = arr.length, bound = len - 1;
    for (let i = 0; i < bound; i++) {
        if (arr[i] >= arr[i + 1]) continue;
        const start = i;
        while (i < bound && arr[i] < arr[i + 1]) i++;
        const peak = i;
        while (i < bound && arr[i] > arr[i + 1]) i++;
        if (i === peak) continue;
        max = Math.max(i - start + 1, max);
        i = peak;
    }
    return max;
}
