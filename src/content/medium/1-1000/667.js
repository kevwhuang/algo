// 667 - Beautiful Arrangement II

function constructArray(n, k) {
    const res = new Uint16Array(n);
    let num = k + 1, i = 1, bound = Math.ceil(num / 2);
    while (num > bound) {
        res[i] = num--;
        i += 2;
    }
    num = 1, i = 0, bound++;
    while (i < n) {
        if (res[i]) i++;
        else res[i++] = num++;
        if (num === bound) num = k + 2;
    }
    return res;
}
