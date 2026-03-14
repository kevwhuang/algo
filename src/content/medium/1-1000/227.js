// 227 - Basic Calculator II

function calculate(s) {
    function operate(sign) {
        switch (sign) {
            case '+': stack.push(+num); break;
            case '-': stack.push(-num); break;
            case '*': stack.push(stack.pop() * num); break;
            default: stack.push(~~(stack.pop() / num));
        }
    }
    const stack = [];
    let num = '', sign = '+';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') continue;
        if ('0' <= char && char <= '9') num += char;
        else {
            operate(sign);
            num = '', sign = char;
        }
    }
    operate(sign);
    return stack.reduce((s, e) => s + e);
}
