// 1442 - Count Triplets That Can Form Two Arrays of Equal XOR

function countTriplets(arr) {
    let triplets = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let xor = arr[i];
        for (let k = i + 1; k < len; k++) {
            xor ^= arr[k];
            if (xor === 0) triplets += k - i;
        }
    }
    return triplets;
}
