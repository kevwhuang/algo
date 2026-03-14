// 1111 - Maximum Nesting Depth of Two Valid Parentheses Strings

function maxDepthAfterSplit(seq) {
    const res = new Array(seq.length);
    for (let i = 0, depth = 0; i < seq.length; i++) {
        res[i] = seq[i] === '(' ? depth++ & 1 : --depth & 1;
    }
    return res;
}
