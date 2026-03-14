// 3678 - Smallest Absent Positive Greater Than Average

function smallestAbsent(nums) {
    let res = (nums.reduce((s, e) => s + e) / nums.length >> 0) + 1;
    if (res <= 0) res = 1;
    while (nums.includes(res)) res++;
    return res;
}
