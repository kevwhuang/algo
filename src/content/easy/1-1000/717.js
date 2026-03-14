// 717 - 1-Bit and 2-Bit Characters

function isOneBitCharacter(bits) {
    let i = 0;
    while (i < bits.length - 1) {
        bits[i] === 0 ? i++ : i += 2;
    }
    return i === bits.length - 1;
}
