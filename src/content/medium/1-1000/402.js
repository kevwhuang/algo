// 402 - Remove K Digits

function removeKdigits(num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        while (k && stack.length && num[i] < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while (k--) stack.pop();
    let index = -1;
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === '0') continue;
        index = i;
        break;
    }
    if (index === -1) return '0';
    return stack.slice(index).join('');
}
