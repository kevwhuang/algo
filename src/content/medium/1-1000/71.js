// 71 - Simplify Path

function simplifyPath(path) {
    path = path.split('/');
    const stack = [];
    for (let i = 0; i < path.length; i++) {
        const cur = path[i];
        if (cur === '' || cur === '.') continue;
        if (cur === '..') stack.length && stack.pop();
        else stack.push(cur);
    }
    return '/' + stack.join('/');
}
