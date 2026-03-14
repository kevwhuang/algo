// 2145 - Count the Hidden Sequences

function numberOfArrays(differences, lower, upper) {
    let acc = 0, min = 0, max = 0;
    for (let i = 0; i < differences.length; i++) {
        acc += differences[i];
        min = Math.min(acc, min);
        max = Math.max(acc, max);
    }
    return Math.max(0, upper + min - lower - max + 1);
}
