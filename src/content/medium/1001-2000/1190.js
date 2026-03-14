// 1190 - Reverse Substrings Between Each Pair of Parentheses

function reverseParentheses(s) {
    const stack = [], indexStack = [];
    for (let i = 0, l, r, temp; i < s.length; i++) {
        if (s[i] === '(') {
            indexStack.push(stack.length);
        } else if (s[i] === ')') {
            l = indexStack.pop();
            r = stack.length - 1;
            while (l < r) {
                temp = stack[l];
                stack[l++] = stack[r];
                stack[r--] = temp;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
}
