// 880 - Decoded String at Index

function decodeAtIndex(s, k) {
    let size = 0, i = 0;
    while (size < k) {
        if (s[i] < 'a') size *= +s[i++];
        else ++size, i++;
    }
    for (let j = i - 1; ~j; j--) {
        if (s[j] < 'a') size /= +s[j];
        k %= size;
        if (s[j] < 'a') continue;
        if (k === 0) return s[j];
        size--;
    }
}
