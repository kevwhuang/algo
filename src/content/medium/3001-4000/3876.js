// 3876. Construct Uniform Parity Array II

function uniformArray(nums1) {
    let acc = 0, min = Infinity, i = -1;
    while (++i < nums1.length) {
        if (nums1[i] % 2 < 1) acc++;
        min = Math.min(nums1[i], min);
    }
    return acc === i || min % 2;
}
