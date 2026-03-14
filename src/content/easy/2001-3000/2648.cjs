// 2648 - Generate Fibonacci Sequence

function* fibGenerator() {
    let a = 0, b = 1, cur;
    while (true) {
        yield a;
        cur = a, a = b, b += cur;
    }
}
