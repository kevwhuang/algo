// 1387 - Sort Integers by the Power Value

function getKth(lo, hi, k) {
    const powers = new Array(hi - lo + 1);
    for (let num = lo; num <= hi; num++) {
        let cur = num, steps = 0;
        while (cur !== 1) {
            if (cur & 1) cur = 3 * cur + 1;
            else cur /= 2;
            steps++;
        }
        powers[num - lo] = [num, steps];
    }
    powers.sort((a, b) => a[1] - b[1]);
    return powers[k - 1][0];
}
