// 3064 - Guess the Number Using Bitwise Questions I

function findNumber() {
    let n = 0, num = 1;
    for (let bit = 0; bit <= 29; bit++, num *= 2) {
        if (commonSetBits(num)) n += num;
    }
    return n;
}
