// 1628 - Design an Expression Tree With Evaluate Function

class TreeBuilder {
    buildTree(postfix) {
        const fns = {
            '+': (a, b) => b + a,
            '-': (a, b) => b - a,
            '*': (a, b) => a * b,
            '/': (a, b) => b / a,
        };
        const S = [];
        postfix.forEach(e => S.push(fns[e]?.(S.pop(), S.pop()) ?? +e));
        return { evaluate: () => S[0] };
    }
}
