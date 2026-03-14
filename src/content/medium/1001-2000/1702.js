// 1702 - Maximum Binary String After Change

function maximumBinaryString(binary) {
    let count = 0, index;
    const len = binary.length;
    for (let i = 0; i < len; i++) {
        if (binary[i] === '1') continue;
        count++;
        index ??= i;
    }
    count += index ?? 0;
    return count < 2 ? binary : '0'.padStart(count, 1).padEnd(len, 1);
}
