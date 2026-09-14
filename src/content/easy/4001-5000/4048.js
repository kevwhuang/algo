// 4048. Count Values With Equally Spaced Occurrences I

function countSpecialIntegers(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }
    let res = 0;
    for (const A of map.values()) {
        if (A.length === 3 && A[1] - A[0] === A[2] - A[1]) res++;
    }
    return res;
}
