// 3591 - Check If Any Element Has Prime Frequency

function checkPrimeFrequency(nums) {
    function init() {
        B = new Uint8Array(101);
        dict = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]);
        dict.add(43).add(47).add(53).add(59).add(61).add(67);
        dict.add(71).add(73).add(79).add(83).add(89).add(97);
    }
    if (!this.B) init();
    B.fill(0);
    nums.forEach(e => B[e]++);
    return B.some(e => dict.has(e));
}
