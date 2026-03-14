// 1009 - Complement of Base 10 Integer

function bitwiseComplement(n) {
    let mask = 1;
    while (mask < n) mask = mask << 1 | 1;
    return ~n & mask;
}
