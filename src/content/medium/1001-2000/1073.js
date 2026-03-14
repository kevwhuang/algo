// 1073 - Adding Two Negabinary Numbers

function addNegabinary(arr1, arr2) {
    const res = [];
    let carry = 0, i = arr1.length - 1, j = arr2.length - 1;
    while (carry || i >= 0 || j >= 0) {
        if (i >= 0) carry += arr1[i--];
        if (j >= 0) carry += arr2[j--];
        res.push(carry & 1);
        carry = -(carry >> 1);
    }
    while (res.length > 1 && res[res.length - 1] === 0) res.pop();
    return res.reverse();
}
