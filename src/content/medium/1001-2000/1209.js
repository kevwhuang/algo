// 1209 - Remove All Adjacent Duplicates in String II

function removeDuplicates(s, k) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (stack.length && stack[stack.length - 1][0] === char) {
            if (++stack[stack.length - 1][1] === k) stack.pop();
        } else {
            stack.push([char, 1]);
        }
    }
    let res = '';
    for (let i = 0; i < stack.length; i++) {
        res += stack[i][0].repeat(stack[i][1]);
    }
    return res;
}
