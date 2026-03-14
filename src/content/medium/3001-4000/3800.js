// 3800 - Minimum Cost to Make Two Binary Strings Equal

function minimumCost(s, t, flipCost, swapCost, crossCost) {
    let acc1 = 0, acc2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0' && t[i] === '1') acc1++;
        else if (s[i] === '1' && t[i] === '0') acc2++;
    }
    const abs = Math.abs(acc1 - acc2);
    const a = abs % 2 * flipCost;
    const b = (abs >> 1) * Math.min(2 * flipCost, swapCost + crossCost);
    const c = Math.min(acc1, acc2) * Math.min(2 * flipCost, swapCost);
    return a + b + c;
}
