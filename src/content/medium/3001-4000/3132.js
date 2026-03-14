// 3132 - Find the Integer Added to Array II

function minimumAddedInteger(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let min = Infinity;
    const n = nums1.length, nn = n - 1;
    for (let i = 0; i < nn; i++) {
        L: for (let j = i + 1; j < n; j++) {
            let tgt;
            for (let k1 = 0, k2 = 0; k1 < n; k1++) {
                if (k1 === i || k1 === j) continue;
                const diff = nums2[k2++] - nums1[k1];
                if (diff >= min) continue L;
                tgt ??= diff;
                if (diff !== tgt) continue L;
            }
            if (tgt < min) min = tgt;
        }
    }
    return min;
}
