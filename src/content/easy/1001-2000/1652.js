// 1652 - Defuse the Bomb

function decrypt(code, k) {
    if (k === 0) return code.fill(0);
    let flag = true;
    if (k < 0) {
        flag = false, k *= -1;
        code.reverse();
    }
    let acc = 0;
    for (let i = 0; i < k; i++) {
        acc += code[i];
    }
    const arr = new Uint16Array(code.length);
    for (let i = 0, j = k - 1; i < code.length; i++) {
        if (j++ === code.length - 1) j = 0;
        arr[i] = acc += code[j] - code[i];
    }
    return flag ? arr : arr.reverse();
}
