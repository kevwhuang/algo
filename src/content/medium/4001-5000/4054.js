// 4054. Count Shadow Pairs I

function shadowPairs(nums) {
    let res = 0;
    const S1 = [0], S2 = [0];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        while (S1[S1.length - 1] > cur) S1.pop(), S2.pop();
        const j = S1.length - 1;
        if (S1[j] === cur) res += S2[j - 1], S2[j]++;
        else res += S2[j], S1.push(cur), S2.push(S2[j] + 1);
    }
    return res;
}
