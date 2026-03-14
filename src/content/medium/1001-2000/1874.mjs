// 1874 - Minimize Product Sum of Two Arrays

function minProductSum(nums1, nums2) {
    const bucket1 = new Array(101).fill(0);
    const bucket2 = new Array(101).fill(0);
    for (let i = 0; i < nums1.length; i++) {
        bucket1[nums1[i]]++;
        bucket2[nums2[i]]++;
    }
    let sum = 0, i = 1, j = 100;
    while (true) {
        while (bucket1[i] === 0) i++;
        while (bucket2[j] === 0) j--;
        if (i > 100 || j < 1) return sum;
        const min = Math.min(bucket1[i], bucket2[j]);
        bucket1[i] -= min;
        bucket2[j] -= min;
        sum += min * i * j;
    }
}
