// 728. Self Dividing Numbers

function selfDividingNumbers(left, right) {
    const res = [];
    while (left <= right) {
        let cur = left;
        while (cur && left % (cur % 10) === 0) cur = cur / 10 >> 0;
        if (cur === 0) res.push(left);
        left++;
    }
    return res;
}
