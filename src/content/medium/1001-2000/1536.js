// 1536 - Minimum Swaps to Arrange a Binary Grid

function minSwaps(grid) {
    const n = grid.length;
    const arr = Array.from({ length: n }, (_, r) => grid[r].lastIndexOf(1));
    let steps = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= i) continue;
        let j = i;
        while (arr[j] > i) j++;
        if (j === n) return -1;
        steps += j - i;
        while (i < j) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j-- - 1] = temp;
        }
    }
    return steps;
}
