// 1592 - Rearrange Spaces Between Words

function reorderSpaces(text) {
    const arr = text.split(/ +/).filter(Boolean);
    const sum = arr.reduce((s, e) => s - e.length, text.length);
    const n = arr.length - 1 || Infinity;
    return arr.join(' '.repeat(sum / n >> 0)) + ' '.repeat(sum % n);
}
