// 10008 - Path to Node in DOM Tree

export function buildNodePath(node) {
    const res = [];
    while (node?.tagName) {
        res.push(node.tagName.toLowerCase());
        node = node.parentNode;
    }
    return node === document ? res.reverse() : [];
}
