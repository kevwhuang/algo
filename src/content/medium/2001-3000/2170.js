// 2170 - Minimum Operations to Make the Array Alternating

function minimumOperations(nums) {
    function compute(start) {
        const map = new Map();
        for (let i = start; i < nums.length; i += 2) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        }
        let maxNum, maxCount1 = 0, maxCount2 = 0;
        for (const num of map.keys()) {
            const count = map.get(num);
            if (count > maxCount1) {
                maxNum = num;
                maxCount2 = maxCount1;
                maxCount1 = count;
            } else if (count > maxCount2) {
                maxCount2 = count;
            }
        }
        return [maxNum, maxCount1, maxCount2];
    }
    const [evenMaxNum, evenMaxCount1, evenMaxCount2] = compute(0);
    const [oddMaxNum, oddMaxCount1, oddMaxCount2] = compute(1);
    if (evenMaxNum === oddMaxNum) {
        const ops1 = evenMaxCount1 + oddMaxCount2;
        const ops2 = evenMaxCount2 + oddMaxCount1;
        return nums.length - Math.max(ops1, ops2);
    }
    return nums.length - evenMaxCount1 - oddMaxCount1;
}
