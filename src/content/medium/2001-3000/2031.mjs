// 2031 - Count Subarrays With More Ones Than Zeros

function subarraysWithMoreZerosThanOnes(nums) {
    const tree = new Uint32Array(200001);
    tree[100000]++;
    let subarrays = 0, acc = 0, running = 0;
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i] || -1;
        running += nums[i] ? tree[acc + 99999] : -tree[acc + 100000];
        subarrays = (subarrays + running) % 1000000007;
        tree[acc + 100000]++;
    }
    return subarrays;
}
