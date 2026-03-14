// 3645 - Maximum Total From Optimal Activation Order

function maxTotal(value, limit) {
    const n = value.length;
    const arr = Array.from({ length: n }, (_, i) => i);
    arr.sort((a, b) => limit[a] - limit[b] || value[b] - value[a]);
    let res = 0, i = 0;
    while (i < n) {
        let acc = limit[arr[i]];
        const tgt = acc;
        while (i < n && limit[arr[i]] === tgt) {
            if (acc) res += value[arr[i]], acc--;
            i++;
        }
    }
    return res;
}
