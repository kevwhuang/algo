// 2764 - Is Array a Preorder of Some Binary Tree

function isPreorder(nodes) {
    const stack = [nodes[0][0]];
    for (let i = 1; i < nodes.length; i++) {
        const parent = nodes[i][1];
        while (stack.length && stack.at(-1) !== parent) stack.pop();
        if (stack.length === 0) return false;
        stack.push(nodes[i][0]);
    }
    return true;
}
