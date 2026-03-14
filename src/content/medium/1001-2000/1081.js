// 1081 - Smallest Subsequence of Distinct Characters

function smallestSubsequence(s) {
    const stack = [], contains = new Set();
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (contains.has(letter)) continue;
        while (stack.length) {
            const last = stack[stack.length - 1];
            if (last <= letter) break;
            if (i >= s.lastIndexOf(last)) break;
            contains.delete(stack.pop());
        }
        stack.push(letter);
        contains.add(letter);
    }
    return stack.join('');
}
