// 1485 - Clone Binary Tree With Random Pointer

function copyRandomBinaryTree(root) {
    function dfsConstruct(node) {
        map.set(node, new NodeCopy(node.val));
        node.left && dfsConstruct(node.left);
        node.right && dfsConstruct(node.right);
    }
    function dfsConnect(node) {
        const copy = map.get(node);
        copy.left = map.get(node.left);
        copy.right = map.get(node.right);
        copy.random = map.get(node.random);
        node.left && dfsConnect(node.left);
        node.right && dfsConnect(node.right);
    }
    if (!root) return null;
    const map = new Map();
    dfsConstruct(root);
    dfsConnect(root);
    return map.get(root);
}
