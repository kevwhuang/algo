// 150 - Evaluate Reverse Polish Notation

function evalRPN(tokens) {
    const S = [];
    for (let i = 0; i < tokens.length; i++) {
        const s = tokens[i];
        if (s === '+') S.push(S.pop() + S.pop());
        else if (s === '-') S.push(-S.pop() + S.pop());
        else if (s === '*') S.push(S.pop() * S.pop());
        else if (s === '/') S.push(1 / (S.pop() / S.pop()) >> 0);
        else S.push(Number(s));
    }
    return S[0];
}
