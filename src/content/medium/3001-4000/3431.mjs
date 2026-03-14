// 3431 - Minimum Unlocked Indices to Sort Nums

function minUnlockedIndices(nums, locked) {
    let idx11, idx2, idx22, idx3, i = -1;
    while (++i < nums.length) {
        if (nums[i] === 1) idx11 = i;
        else if (nums[i] === 3) idx3 ??= i;
        else idx2 ??= i, idx22 = i;
    }
    idx2 ??= Infinity, idx3 ??= Infinity;
    if (idx3 < idx11) return -1;
    let res = 0;
    while (idx2 < idx11) if (locked[idx2++]) res++, locked[idx2 - 1]--;
    while (idx3 < idx22) if (locked[idx3++]) res++;
    return res;
}
