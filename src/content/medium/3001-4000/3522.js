// 3522 - Calculate Score After Performing Instructions

function calculateScore(instructions, values) {
    let res = 0, cur, i = 0;
    while (i >= 0 && i < values.length && values[i] !== null) {
        cur = values[i], values[i] = null;
        if (instructions[i] > 'b') i += cur;
        else res += cur, i++;
    }
    return res;
}
