// 1313 - Decompress Run-Length Encoded List

function decompressRLElist(nums) {
    const list = [];
    for (let i = 0; i < nums.length; i += 2) {
        let f = nums[i];
        while (f) list.push(nums[i + 1]) && f--;
    }
    return list;
}
