// 3048 - Earliest Second to Mark Indices I

function earliestSecondToMarkIndices(nums, changeIndices) {
    changeIndices.forEach((_, i) => changeIndices[i]--);
    let l = 0, r = changeIndices.length - 1;
    while (l <= r) {
        let marked = 0, ops = 0;
        const arr = new Int16Array(nums.length).fill(-1);
        const m = l + r >> 1;
        for (let t = 0; t <= m; t++) {
            arr[changeIndices[t]] = t;
        }
        for (let t = 0; t <= m; t++) {
            if (t !== arr[changeIndices[t]]) { ops++; continue; }
            ops -= nums[changeIndices[t]];
            if (ops < 0) { marked = 0; break; }
            marked++;
        }
        if (marked === nums.length) r = m - 1;
        else l = m + 1;
    }
    return l === changeIndices.length ? -1 : l + 1;
}
