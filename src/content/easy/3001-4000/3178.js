// 3178 - Find the Child Who Has the Ball After K Seconds

function numberOfChild(n, k) {
    return (k / --n >> 0) % 2 ? n - k % n : k % n;
}
