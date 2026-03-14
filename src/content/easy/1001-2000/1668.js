// 1668 - Maximum Repeating Substring

function maxRepeating(sequence, word) {
    let res = 0, s = word;
    while (sequence.includes(s)) res++, s += word;
    return res;
}
