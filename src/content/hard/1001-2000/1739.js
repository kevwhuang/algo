// 1739 - Building Boxes

function minimumBoxes(n) {
    let res = 0, acc = 0, d = 0;
    while (acc < n) res += ++d, acc += res;
    while (acc > n) res--, acc -= d--;
    return res + (acc < n);
}
