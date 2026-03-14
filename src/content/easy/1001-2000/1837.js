// 1837 - Sum of Digits in Base K

function sumBase(n, k) {
    n = n.toString(k);
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    return sum;
}
