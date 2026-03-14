// 3199 - Count Triplets With Even XOR Set Bits I

function tripletCount(a, b, c) {
    function check(arr) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            let acc = 0, cur = arr[i];
            while (cur) acc += cur & 1, cur >>= 1;
            res += acc % 2;
        }
        return [res, arr.length - res];
    }
    const [a1, a2] = check(a), [b1, b2] = check(b), [c1, c2] = check(c);
    return a2 * b2 * c2 + a1 * b1 * c2 + a1 * b2 * c1 + a2 * b1 * c1;
}
