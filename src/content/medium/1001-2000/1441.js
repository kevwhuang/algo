// 1441 - Build an Array With Stack Operations

function buildArray(target, n) {
    const ops = [];
    const last = target[target.length - 1];
    let num = i = 0;
    while (++num <= last) {
        ops.push('Push');
        num === target[i] ? i++ : ops.push('Pop');
    }
    return ops;
}
