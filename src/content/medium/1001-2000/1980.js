// 1980 - Find Unique Binary String

function findDifferentBinaryString(nums) {
    const len = nums[0].length;
    const set = new Set(nums);
    let num = 0;
    while (true) {
        const str = num.toString(2).padStart(len, '0');
        if (!set.has(str)) return str;
        num++;
    }
}
