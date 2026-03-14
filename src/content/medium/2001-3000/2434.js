// 2434 - Using a Robot to Print the Lexicographically Smallest String

function robotWithString(s) {
    let min = '~', minIndex;
    const arr = new Uint32Array(s.length);
    for (let i = s.length - 1; ~i; i--) {
        if (s[i] < min) {
            min = s[i];
            minIndex = i;
        }
        arr[i] = minIndex;
    }
    const res = [], stack = [];
    for (let i = 0; i < s.length; i++) {
        while (stack.length && stack[stack.length - 1] <= s[arr[i]]) {
            res.push(stack.pop());
        }
        stack.push(s[i]);
    }
    return res.join('') + stack.reverse().join('');
}
