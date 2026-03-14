// 3215 - Count Triplets With Even XOR Set Bits II

function tripletCount(a, b, c) {
    function traverse(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            let ones = 0, cur = arr[i];
            while (cur) ones += cur & 1, cur >>= 1;
            count += ones % 2;
        }
        return [count, arr.length - count];
    }
    const [aOdd, aEven] = traverse(a);
    const [bOdd, bEven] = traverse(b);
    const [cOdd, cEven] = traverse(c);
    let triplets = aEven * bEven * cEven;
    triplets += aOdd * bOdd * cEven;
    triplets += aOdd * bEven * cOdd;
    triplets += aEven * bOdd * cOdd;
    return triplets;
}
