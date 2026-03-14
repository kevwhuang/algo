// 946 - Validate Stack Sequences

function validateStackSequences(pushed, popped) {
    const stack = [];
    for (let i = 0, j = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while (j < popped.length && stack.at(-1) === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return !stack.length;
}
