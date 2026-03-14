// 3307 - Find the Kth Character in String Game II

function kthCharacter(k, operations) {
    let acc = 0, a = 1 + Math.log2(k) >> 0;
    while (~--a) if (2 ** a < k) acc += operations[a], k -= 2 ** a;
    return String.fromCharCode(97 + acc % 26);
}
