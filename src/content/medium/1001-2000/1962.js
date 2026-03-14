// 1962 - Remove Stones to Minimize the Total

function minStoneSum(piles, k) {
    const arr = new Array(10001).fill(0);
    let total = 0;
    for (let i = 0; i < piles.length; i++) {
        const pile = piles[i];
        arr[pile]++;
        total += pile;
    }
    let removed = 0, n = arr.length - 1;
    while (k--) {
        while (arr[n] === 0) n--;
        if (n === 1) break;
        const stonesRemoved = (n / 2) >> 0;
        removed += stonesRemoved;
        arr[n]--;
        arr[n - stonesRemoved]++;
    }
    return total - removed;
}
