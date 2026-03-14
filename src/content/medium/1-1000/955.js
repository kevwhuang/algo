// 955 - Delete Columns to Make Sorted II

function minDeletionSize(strs) {
    let deleted = 0;
    const m = strs.length, n = strs[0].length;
    const arr = new Uint8Array(m);
    L: for (let i, j = 0; j < n; j++) {
        i = 0;
        while (++i < m) {
            if (arr[i - 1]) continue;
            if (strs[i - 1][j] <= strs[i][j]) continue;
            deleted++;
            continue L;
        }
        i = 0;
        while (++i < m) arr[i - 1] |= strs[i - 1][j] < strs[i][j];
    }
    return deleted;
}
