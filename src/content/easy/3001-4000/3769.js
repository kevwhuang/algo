// 3769 - Sort Integers by Binary Reflection

function sortByReflection(nums) {
    function fn(a) {
        let b = 0;
        while (a) b = b << 1 | a & 1, a >>= 1;
        return b;
    }
    return nums.sort((a, b) => fn(a) - fn(b) || a - b);
}
