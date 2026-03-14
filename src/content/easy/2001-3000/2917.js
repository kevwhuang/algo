// 2917 - Find the K-OR of an Array

function findKOr(nums, k) {
    const bits = new Array(31).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i], j = 30;
        while (num) {
            if (num & 1) bits[j]++;
            num >>>= 1;
            j--;
        }
    }
    let kor = 0;
    for (let i = 30, mult = 1; i >= 0; i--, mult *= 2) {
        if (bits[i] >= k) kor += mult;
    }
    return kor;
}
