// 482 - License Key Formatting

function licenseKeyFormatting(s, k) {
    const arr = s.replaceAll('-', '').toUpperCase().split('');
    for (let i = arr.length - k - 1; i >= 0; i -= k) {
        arr[i] += '-';
    }
    return arr.join('');
}
