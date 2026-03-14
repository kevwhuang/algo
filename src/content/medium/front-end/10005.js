// 10005 - Count Leaf Nodes

export function countLeafNodes(node) {
    let res = 0;
    const walker = document.createTreeWalker(node);
    while (walker.nextNode()) {
        if (walker.currentNode.childNodes.length) continue;
        res++;
    }
    return res || 1;
}
