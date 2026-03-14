// 2375 - Construct Smallest Number From DI String

function smallestNumber(pattern) {
    let res = '';
    const stack = [];
    for (let d = 1; d <= pattern.length + 1; d++) {
        stack.push(d);
        if (pattern[d - 1] === 'D') continue;
        while (stack.length) res += stack.pop();
    }
    while (stack.length) res += stack.pop();
    return res;
}
