// 4062. Transform Array Using Pair Operations

function canTransform(source, target) {
    let sum = 0;
    for (let i = 0; i < source.length; i++) {
        sum += source[i] - target[i];
    }
    return sum === 0;
}
