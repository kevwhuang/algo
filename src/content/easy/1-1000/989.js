// 989 - Add to Array-Form of Integer

function addToArrayForm(num, k) {
    const add = BigInt(num.join('')) + BigInt(k);
    return add.toString().split('').map(e => +e);
}
