// 397 - Integer Replacement

function integerReplacement(n) {
    let ops = 0;
    while (n > 1) {
        if (n & 1 && n > 4 && (n + 1) % 4 === 0) n++;
        else if (n & 1) n--;
        else n /= 2;
        ops++;
    }
    return ops;
}
