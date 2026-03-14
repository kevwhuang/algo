// 1764 - Form Array by Concatenating Subarrays of Another Array

function canChoose(groups, nums) {
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== groups[j][0]) continue;
        const group = groups[j];
        let ii = i, jj = 0;
        while (ii < nums.length && jj < group.length) {
            if (nums[ii] !== group[jj]) break;
            ii++, jj++;
        }
        if (jj !== group.length) continue;
        if (++j === groups.length) return true;
        i += group.length - 1;
    }
    return false;
}
