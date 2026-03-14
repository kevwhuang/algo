// 481 - Magical String

function magicalString(n) {
    const arr = new Uint8Array(n);
    arr[0] = 1, arr[1] = arr[2] = 2;
    for (let i = 2, j = 2; j < n; i++) {
        const num = 3 - arr[j];
        arr[++j] = num;
        if (j === n) break;
        if (arr[i] === 2) arr[++j] = num;
    }
    let ones = 1;
    for (let i = 3; i < n; i++) {
        if (arr[i] === 1) ones++;
    }
    return ones;
}
