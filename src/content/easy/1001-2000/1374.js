// 1374 - Generate a String With Characters That Have Odd Counts

function generateTheString(n) {
    return n % 2 ? 'x'.repeat(n) : 'x'.repeat(n - 1) + 'y';
}
