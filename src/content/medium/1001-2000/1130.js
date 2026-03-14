// 1130 - Minimum Cost Tree From Leaf Values

function mctFromLeafValues(arr) {
    let res = 0, i = -1;
    const S = [100];
    while (++i < arr.length) {
        const cur = arr[i];
        while (S.at(-1) <= cur) res += S.pop() * Math.min(S.at(-1), cur);
        S.push(cur);
    }
    while (S.length > 2) res += S.pop() * S.at(-1);
    return res;
}
